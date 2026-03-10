'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, UserPlus } from 'lucide-react';
import { AdminUser, createId, getUsers, saveUsers } from '@/app/admin/admin-data';

type UserForm = {
  name: string;
  email: string;
  password: string;
  role: string;
};

const EMPTY_USER_FORM: UserForm = {
  name: '',
  email: '',
  password: '',
  role: 'Editor',
};

export function UserAccessControl() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState<UserForm>(EMPTY_USER_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingRole, setEditingRole] = useState('Editor');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const handleAddUser = () => {
    if (!newUser.name.trim() || !newUser.email.trim() || !newUser.password.trim()) {
      setStatusMessage('Name, email, and password are required.');
      return;
    }
    const emailExists = users.some(
      (user) => user.email.toLowerCase() === newUser.email.trim().toLowerCase()
    );
    if (emailExists) {
      setStatusMessage('User with this email already exists.');
      return;
    }

    const created: AdminUser = {
      id: createId('user'),
      name: newUser.name.trim(),
      email: newUser.email.trim(),
      password: newUser.password,
      role: newUser.role,
      status: 'Active',
      lastActive: 'Never',
    };

    const nextUsers = [...users, created];
    setUsers(nextUsers);
    saveUsers(nextUsers);
    setNewUser(EMPTY_USER_FORM);
    setShowAddUser(false);
    setStatusMessage('User added.');
  };

  const openEdit = (user: AdminUser) => {
    setEditingId(user.id);
    setEditingRole(user.role);
  };

  const saveEdit = (id: string) => {
    const nextUsers = users.map((user) => (user.id === id ? { ...user, role: editingRole } : user));
    setUsers(nextUsers);
    saveUsers(nextUsers);
    setEditingId(null);
    setStatusMessage('User updated.');
  };

  const toggleStatus = (id: string) => {
    const nextUsers = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === 'Active' ? 'Disabled' : 'Active' }
        : user
    ) as AdminUser[];
    setUsers(nextUsers);
    saveUsers(nextUsers);
    setStatusMessage('User status updated.');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Access Control</h2>
          <p className="text-gray-500 text-sm">Manage admin users and permissions</p>
        </div>
        <Button className="gap-2" onClick={() => setShowAddUser((prev) => !prev)}>
          <UserPlus className="w-4 h-4" /> Add User
        </Button>
      </div>

      {statusMessage && <p className="text-sm text-green-700">{statusMessage}</p>}

      {showAddUser && (
        <div className="bg-white rounded-xl shadow-sm border p-4 space-y-3">
          <Input
            placeholder="Full name"
            value={newUser.name}
            onChange={(e) => setNewUser((prev) => ({ ...prev, name: e.target.value }))}
          />
          <Input
            placeholder="Email"
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser((prev) => ({ ...prev, email: e.target.value }))}
          />
          <Input
            placeholder="Password"
            type="password"
            value={newUser.password}
            onChange={(e) => setNewUser((prev) => ({ ...prev, password: e.target.value }))}
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser((prev) => ({ ...prev, role: e.target.value }))}
            className="w-full rounded-md border bg-gray-50 p-2"
          >
            <option value="Editor">Editor</option>
            <option value="Manager">Manager</option>
            <option value="Super Admin">Super Admin</option>
          </select>
          <Button onClick={handleAddUser}>Create User</Button>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 font-semibold">User</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold">Last Active</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4">
                  {editingId === user.id ? (
                    <select
                      value={editingRole}
                      onChange={(e) => setEditingRole(e.target.value)}
                      className="rounded-md border bg-gray-50 p-1"
                    >
                      <option value="Editor">Editor</option>
                      <option value="Manager">Manager</option>
                      <option value="Super Admin">Super Admin</option>
                    </select>
                  ) : (
                    <span className="flex items-center gap-1 text-purple-600 bg-purple-50 px-2 py-1 rounded-full w-fit text-xs">
                      <Shield size={12} /> {user.role}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-500">{user.lastActive}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      user.status === 'Active'
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-600 bg-gray-100'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {editingId === user.id ? (
                      <Button variant="ghost" size="sm" onClick={() => saveEdit(user.id)}>
                        Save
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm" onClick={() => openEdit(user)}>
                        Edit
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => toggleStatus(user.id)}>
                      {user.status === 'Active' ? 'Disable' : 'Activate'}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
