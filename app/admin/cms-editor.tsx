'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Save } from 'lucide-react';
import { CMSPage, CMSSection, getCMSPages, saveCMSPages } from '@/app/admin/admin-data';

export function CMSEditor() {
  const [activeSection, setActiveSection] = useState<CMSSection>('services');
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [selectedPageId, setSelectedPageId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setPages(getCMSPages());
  }, []);

  const sectionPages = useMemo(
    () => pages.filter((page) => page.section === activeSection),
    [activeSection, pages]
  );

  useEffect(() => {
    const firstPage = sectionPages[0];
    setSelectedPageId(firstPage?.id ?? '');
    setStatusMessage('');
  }, [sectionPages]);

  useEffect(() => {
    const selected = pages.find((page) => page.id === selectedPageId);
    setTitle(selected?.title ?? '');
    setContent(selected?.content ?? '');
    setPrice(selected?.price ?? '');
  }, [pages, selectedPageId]);

  const handleSave = () => {
    if (!selectedPageId) return;
    const updatedPages = pages.map((page) =>
      page.id === selectedPageId ? { ...page, title, content, price } : page
    );
    setPages(updatedPages);
    saveCMSPages(updatedPages);
    setStatusMessage('Changes saved.');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">CMS Editor</h2>
        <p className="text-gray-500 text-sm">Manage content for services and state pages</p>
      </div>

      <div className="flex gap-4 border-b">
        {(['services', 'states', 'pricing'] as CMSSection[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSection(tab)}
            className={`pb-3 px-1 text-sm font-medium capitalize transition-colors ${
              activeSection === tab
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab} Pages
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 capitalize">Edit {activeSection} Content</h3>

        <div className="space-y-4 max-w-2xl">
          <div>
            <label className="block text-sm font-medium mb-1">Select Page</label>
            <select
              value={selectedPageId}
              onChange={(e) => setSelectedPageId(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-50"
            >
              {sectionPages.length === 0 && <option value="">No pages in this section</option>}
              {sectionPages.map((page) => (
                <option key={page.id} value={page.id}>
                  {page.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Page Title</label>
            <Input
              placeholder="Enter page title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={!selectedPageId}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content / Description</label>
            <Textarea
              placeholder="Enter page content..."
              className="min-h-[150px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={!selectedPageId}
            />
          </div>

          {activeSection === 'pricing' && (
            <div>
              <label className="block text-sm font-medium mb-1">Price (INR)</label>
              <Input
                type="number"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={!selectedPageId}
              />
            </div>
          )}

          <div className="pt-4">
            <Button className="gap-2" onClick={handleSave} disabled={!selectedPageId}>
              <Save className="w-4 h-4" /> Save Changes
            </Button>
            {statusMessage && <p className="mt-2 text-sm text-green-700">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
