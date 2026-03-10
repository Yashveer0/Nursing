'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CalendarDays, FileText, Mail, ShieldCheck, User } from 'lucide-react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isReady } = useAuth();

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isReady, router]);

  if (!isReady || !isAuthenticated || !user) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Header />
        <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 pt-24">
          <p className="text-sm text-slate-600">Loading profile...</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <Header />
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-sky-100 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[linear-gradient(135deg,#102c57_0%,#1d4ed8_52%,#38bdf8_100%)] px-8 py-12 text-white sm:px-10">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-blue-100">
                  My Profile
                </p>
                <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                  Personal details for your Nursing Sarathi account
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-blue-50 sm:text-base">
                  Your profile is available only after login and is separate from the admin panel.
                  Here you can quickly review the account details connected to your website access.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-100">Member Name</p>
                    <p className="mt-3 text-xl font-semibold">{user.name}</p>
                  </div>
                  <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-100">Access Role</p>
                    <p className="mt-3 text-xl font-semibold">{user.role}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/my-applications">
                    <Button className="rounded-full bg-white text-sky-800 hover:bg-sky-50">
                      My Applications
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-white px-8 py-10 sm:px-10">
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                    Account Overview
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                    Secure user information
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-sky-200 hover:bg-sky-50/60">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <User className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Full Name</p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">{user.name}</p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-sky-200 hover:bg-sky-50/60">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Mail className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Email Address</p>
                    <p className="mt-2 break-all text-xl font-semibold text-slate-900">{user.email}</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-500">Account Type</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{user.role}</p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                        <CalendarDays className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-500">Joined On</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        {new Date(user.createdAt).toLocaleDateString('en-IN', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-sky-200 hover:bg-sky-50/60">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <FileText className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Career Applications</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      Track all jobs you have applied for and review each application status.
                    </p>
                    <Link href="/my-applications" className="mt-4 inline-block">
                      <Button variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50">
                        View Applications
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
