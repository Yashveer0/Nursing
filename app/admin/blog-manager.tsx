'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { BlogPost, createId, getBlogPosts, saveBlogPosts } from '@/app/admin/admin-data';

type BlogForm = {
  title: string;
  excerpt: string;
  content: string;
};

const EMPTY_FORM: BlogForm = { title: '', excerpt: '', content: '' };

export function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<BlogForm>(EMPTY_FORM);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setPosts(getBlogPosts());
  }, []);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [posts]
  );

  const openCreate = () => {
    setIsEditing(true);
    setEditingId(null);
    setForm(EMPTY_FORM);
    setStatusMessage('');
  };

  const openEdit = (post: BlogPost) => {
    setIsEditing(true);
    setEditingId(post.id);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
    });
    setStatusMessage('');
  };

  const closeEditor = () => {
    setIsEditing(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleSave = () => {
    if (!form.title.trim() || !form.excerpt.trim() || !form.content.trim()) {
      setStatusMessage('Fill title, excerpt, and content.');
      return;
    }

    const updatedPosts = editingId
      ? posts.map((post) =>
          post.id === editingId
            ? {
                ...post,
                title: form.title.trim(),
                excerpt: form.excerpt.trim(),
                content: form.content.trim(),
              }
            : post
        )
      : [
          {
            id: createId('blog'),
            title: form.title.trim(),
            excerpt: form.excerpt.trim(),
            content: form.content.trim(),
            date: new Date().toISOString().slice(0, 10),
          },
          ...posts,
        ];

    setPosts(updatedPosts);
    saveBlogPosts(updatedPosts);
    setStatusMessage(editingId ? 'Post updated.' : 'Post created.');
    closeEditor();
  };

  const handleDelete = (id: string) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    saveBlogPosts(updatedPosts);
    setStatusMessage('Post deleted.');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Blog Manager</h2>
          <p className="text-gray-500 text-sm">Create and manage blog posts</p>
        </div>
        <Button className="gap-2" onClick={openCreate}>
          <Plus className="w-4 h-4" /> New Post
        </Button>
      </div>

      {statusMessage && <p className="text-sm text-green-700">{statusMessage}</p>}

      {isEditing && (
        <div className="bg-white rounded-xl shadow-sm border p-4 space-y-3">
          <h3 className="text-lg font-semibold">{editingId ? 'Edit Post' : 'Create Post'}</h3>
          <Input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
          />
          <Input
            placeholder="Excerpt"
            value={form.excerpt}
            onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
          />
          <Textarea
            placeholder="Content"
            className="min-h-[120px]"
            value={form.content}
            onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
          />
          <div className="flex gap-2">
            <Button onClick={handleSave} className="gap-2">
              <Save className="w-4 h-4" /> Save
            </Button>
            <Button variant="outline" onClick={closeEditor} className="gap-2">
              <X className="w-4 h-4" /> Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-shadow"
          >
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Blog Post
            </div>
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-xs text-gray-400">{post.date}</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => openEdit(post)}>
                  <Edit2 className="w-4 h-4 text-blue-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => handleDelete(post.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
