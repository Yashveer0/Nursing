'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Phone, MapPin } from 'lucide-react';
import { getLeads, Lead, LeadStatus, saveLeads } from '@/app/admin/admin-data';

const STATUS_FILTERS: Array<'All' | LeadStatus> = ['All', 'New', 'In Progress', 'Completed'];

export function LeadManagement() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | LeadStatus>('All');

  useEffect(() => {
    setLeads(getLeads());
  }, []);

  const filteredLeads = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesSearch =
        lead.state.toLowerCase().includes(normalizedQuery) ||
        lead.name.toLowerCase().includes(normalizedQuery);
      const matchesStatus = statusFilter === 'All' ? true : lead.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [leads, searchTerm, statusFilter]);

  const cycleStatus = (currentStatus: LeadStatus): LeadStatus => {
    if (currentStatus === 'New') return 'In Progress';
    if (currentStatus === 'In Progress') return 'Completed';
    return 'New';
  };

  const handleAssign = (leadId: string) => {
    const updated = leads.map((lead) =>
      lead.id === leadId ? { ...lead, status: cycleStatus(lead.status) } : lead
    );
    setLeads(updated);
    saveLeads(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Lead Management</h2>
          <p className="text-gray-500 text-sm">View and manage patient inquiries</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search by name or state..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-white"
            />
          </div>
          <div className="relative min-w-40">
            <Filter className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'All' | LeadStatus)}
              className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {STATUS_FILTERS.map((status) => (
                <option key={status} value={status}>
                  {status === 'All' ? 'All Statuses' : status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b text-gray-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Patient Name</th>
                <th className="px-6 py-4 font-semibold">Service Required</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Phone className="w-3 h-3" /> {lead.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{lead.service}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-gray-700">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      {lead.city}, {lead.state}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{lead.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                      lead.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white text-xs h-8"
                      onClick={() => handleAssign(lead.id)}
                    >
                      Assign
                    </Button>
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td className="px-6 py-6 text-center text-sm text-gray-500" colSpan={6}>
                    No leads found for current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
