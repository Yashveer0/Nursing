'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Globe } from 'lucide-react';
import { getSeoMetadata, saveSeoMetadata, SeoMetadata } from '@/app/admin/admin-data';

export function SEOMetaEditor() {
  const [metadata, setMetadata] = useState<SeoMetadata>({
    title: '',
    description: '',
    ogTitle: '',
    ogImage: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setMetadata(getSeoMetadata());
  }, []);

  const handleUpdate = () => {
    saveSeoMetadata(metadata);
    setStatusMessage('Metadata updated.');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">SEO Meta Editor</h2>
        <p className="text-gray-500 text-sm">Configure global SEO settings and meta tags</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center gap-2 mb-6 text-primary">
          <Globe className="w-5 h-5" />
          <h3 className="font-semibold">Global Metadata</h3>
        </div>

        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Default Title Tag</label>
            <Input
              value={metadata.title}
              onChange={(e) => setMetadata((prev) => ({ ...prev, title: e.target.value }))}
            />
            <p className="text-xs text-gray-400 mt-1">Recommended length: 50-60 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Meta Description</label>
            <Textarea
              value={metadata.description}
              onChange={(e) => setMetadata((prev) => ({ ...prev, description: e.target.value }))}
              className="min-h-[100px]"
            />
            <p className="text-xs text-gray-400 mt-1">Recommended length: 150-160 characters</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">OG Title</label>
              <Input
                value={metadata.ogTitle}
                onChange={(e) => setMetadata((prev) => ({ ...prev, ogTitle: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">OG Image URL</label>
              <Input
                value={metadata.ogImage}
                onChange={(e) => setMetadata((prev) => ({ ...prev, ogImage: e.target.value }))}
              />
            </div>
          </div>

          <div className="pt-4">
            <Button onClick={handleUpdate}>Update Metadata</Button>
            {statusMessage && <p className="mt-2 text-sm text-green-700">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
