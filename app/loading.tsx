import { Loader2 } from 'lucide-react';

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-white/80 backdrop-blur-[2px]">
      <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-primary shadow-sm">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm font-medium">Loading...</span>
      </div>
    </div>
  );
}
