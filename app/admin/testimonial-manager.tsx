'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Trash2 } from 'lucide-react';
import {
  createId,
  getTestimonials,
  saveTestimonials,
  Testimonial,
} from '@/app/admin/admin-data';

export function TestimonialManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setTestimonials(getTestimonials());
  }, []);

  const handleAdd = () => {
    if (!name.trim() || !text.trim()) {
      setStatusMessage('Name and testimonial text are required.');
      return;
    }
    const next = [
      {
        id: createId('testimonial'),
        name: name.trim(),
        rating,
        text: text.trim(),
        date: new Date().toISOString().slice(0, 10),
      },
      ...testimonials,
    ];
    setTestimonials(next);
    saveTestimonials(next);
    setName('');
    setRating(5);
    setText('');
    setShowForm(false);
    setStatusMessage('Testimonial added.');
  };

  const handleDelete = (id: string) => {
    const next = testimonials.filter((item) => item.id !== id);
    setTestimonials(next);
    saveTestimonials(next);
    setStatusMessage('Testimonial deleted.');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
          <p className="text-gray-500 text-sm">Manage customer reviews and ratings</p>
        </div>
        <Button onClick={() => setShowForm((prev) => !prev)}>Add Testimonial</Button>
      </div>

      {statusMessage && <p className="text-sm text-green-700">{statusMessage}</p>}

      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border p-4 space-y-3">
          <Input placeholder="Customer name" value={name} onChange={(e) => setName(e.target.value)} />
          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full rounded-md border bg-gray-50 p-2"
            >
              {[5, 4, 3, 2, 1].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <Textarea
            placeholder="Write testimonial..."
            className="min-h-[100px]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={handleAdd}>Save Testimonial</Button>
        </div>
      )}

      <div className="grid gap-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-4 rounded-xl shadow-sm border flex justify-between items-start"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{t.name}</span>
                <div className="flex text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm">{t.text}</p>
              <p className="text-xs text-gray-400 mt-1">{t.date}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => handleDelete(t.id)}
            >
              <Trash2 size={16} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
