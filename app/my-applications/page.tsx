'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  MapPin,
} from 'lucide-react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useAuth } from '@/components/auth/auth-provider';
import { getMyApplications, type UserApplication } from '@/lib/careers/api';

const statusStyles: Record<UserApplication['status'], string> = {
  Applied: 'bg-blue-100 text-blue-700',
  Shortlisted: 'bg-amber-100 text-amber-700',
  Rejected: 'bg-red-100 text-red-700',
  Hired: 'bg-emerald-100 text-emerald-700',
};

export default function MyApplicationsPage() {
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();
  const [applications, setApplications] = useState<UserApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isReady, router]);

  useEffect(() => {
    if (!isReady || !isAuthenticated) {
      return;
    }

    let active = true;

    async function loadApplications() {
      try {
        const data = await getMyApplications();
        if (active) {
          setApplications(data);
        }
      } catch (loadError) {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : 'Unable to load your applications.'
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadApplications();

    return () => {
      active = false;
    };
  }, [isAuthenticated, isReady]);

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <Header />

      <section className="relative mt-18 overflow-hidden bg-[linear-gradient(135deg,#102c57_0%,#1d4ed8_52%,#38bdf8_100%)] pt-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
              My Applications
            </p>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Track every job application in one place.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50">
              Review the role you applied for, location, salary, submission date, and current hiring
              status.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {loading && (
          <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 text-center text-slate-600 shadow-sm">
            Loading your applications...
          </div>
        )}

        {!loading && error && (
          <div className="rounded-[32px] border border-red-200 bg-red-50 px-8 py-6 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && applications.length === 0 && (
          <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">No applications yet</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              You have not applied for any open role yet. Browse current positions and submit your
              first application.
            </p>
            <Link href="/careers" className="mt-6 inline-block">
              <Button className="bg-primary text-white hover:bg-red-500">Browse Careers</Button>
            </Link>
          </div>
        )}

        {!loading && !error && applications.length > 0 && (
          <div className="space-y-6">
            {applications.map((application, index) => (
              <ScrollReveal key={application._id} delay={0.04 * Math.min(index, 4)}>
                <article className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] ${statusStyles[application.status]}`}
                        >
                          {application.status}
                        </span>
                        <span className="text-sm text-slate-500">Application ID: {application._id}</span>
                      </div>

                      <div>
                        <h2 className="text-2xl font-semibold text-slate-900">
                          {application.job?.title ?? 'Job'}
                        </h2>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-sky-700" />
                            {application.job?.location ?? 'Location not available'}
                          </span>
                          {application.job?.salary && (
                            <span className="inline-flex items-center gap-2">
                              <CircleDollarSign className="h-4 w-4 text-sky-700" />
                              {application.job.salary}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-sky-700" />
                            {new Date(application.createdAt).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl bg-slate-50 px-5 py-4 text-sm text-slate-600">
                      <p className="font-medium text-slate-900">Job status</p>
                      <p className="mt-1">{application.job?.status ?? 'Unknown'}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-5 lg:grid-cols-2">
                    <div className="rounded-3xl bg-slate-50 p-5">
                      <div className="mb-3 flex items-center gap-2 text-slate-900">
                        <BriefcaseBusiness className="h-4 w-4 text-sky-700" />
                        <p className="font-semibold">Experience shared</p>
                      </div>
                      <p className="text-sm leading-7 text-slate-600">
                        {application.experience?.trim() || 'No experience details provided.'}
                      </p>
                    </div>

                    <div className="rounded-3xl bg-slate-50 p-5">
                      <p className="mb-3 font-semibold text-slate-900">Cover letter</p>
                      <p className="text-sm leading-7 text-slate-600">
                        {application.coverLetter?.trim() || 'No cover letter submitted.'}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
