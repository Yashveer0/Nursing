'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  FileText,
  MapPin,
} from 'lucide-react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useAuth } from '@/components/auth/auth-provider';
import { applyToCareer, getCareers, type CareerJob } from '@/lib/careers/api';

export default function CareersPage() {
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();
  const [jobs, setJobs] = useState<CareerJob[]>([]);
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
  const [experience, setExperience] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [pageError, setPageError] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadJobs() {
      try {
        const data = await getCareers();
        if (active) {
          setJobs(data);
        }
      } catch (error) {
        if (active) {
          setPageError(error instanceof Error ? error.message : 'Unable to load careers.');
        }
      } finally {
        if (active) {
          setLoadingJobs(false);
        }
      }
    }

    loadJobs();

    return () => {
      active = false;
    };
  }, []);

  const handleApply = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError('');
    setFormMessage('');

    if (!selectedJob) {
      setFormError('Please choose a position first.');
      return;
    }

    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    setSubmitting(true);

    try {
      await applyToCareer(selectedJob._id, experience, coverLetter);
      setFormMessage('Application submitted successfully.');
      setExperience('');
      setCoverLetter('');
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Unable to submit application.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-24">
      <Header />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_52%,#38bdf8_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">
              Careers At Nursing Sarathi
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Build a meaningful healthcare career with a patient-first team.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50">
              Explore open roles across care delivery and operations. Apply directly through the
              website using your registered user account.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.2fr_0.8fr] sm:px-6 lg:px-8">
          <div>
            <ScrollReveal>
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                    Open Positions
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                    Current hiring opportunities
                  </h2>
                </div>
                <div className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-slate-600">
                  {loadingJobs ? 'Loading...' : `${jobs.length} roles available`}
                </div>
              </div>
            </ScrollReveal>

            {pageError && (
              <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                {pageError}
              </div>
            )}

            {!pageError && !loadingJobs && jobs.length === 0 && (
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
                No openings are available right now.
              </div>
            )}

            <div className="space-y-6">
              {jobs.map((job, index) => {
                const isSelected = selectedJob?._id === job._id;

                return (
                  <ScrollReveal key={job._id} delay={0.04 * Math.min(index, 4)}>
                    <article
                      className={`rounded-[32px] border p-7 shadow-sm transition-all ${
                        isSelected
                          ? 'border-sky-300 bg-white shadow-[0_22px_60px_rgba(14,116,144,0.14)]'
                          : 'border-slate-200 bg-white hover:border-sky-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]'
                      }`}
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                              <BriefcaseBusiness className="h-4 w-4" />
                              {job.status}
                            </span>
                            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                              <Building2 className="h-4 w-4" />
                              Nursing Sarathi
                            </span>
                          </div>

                          <div>
                            <h3 className="text-2xl font-semibold text-slate-900">{job.title}</h3>
                            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
                              <span className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-sky-700" />
                                {job.location}
                              </span>
                              {job.salary && (
                                <span className="inline-flex items-center gap-2">
                                  <CircleDollarSign className="h-4 w-4 text-sky-700" />
                                  {job.salary}
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="text-sm leading-7 text-slate-600">{job.description}</p>

                          <div className="rounded-3xl bg-slate-50 p-5">
                            <p className="mb-2 text-sm font-semibold text-slate-900">Requirements</p>
                            <p className="text-sm leading-7 text-slate-600">{job.requirements}</p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center">
                          <Button
                            type="button"
                            className="rounded-full bg-primary px-6 text-white hover:bg-red-500"
                            onClick={() => {
                              setSelectedJob(job);
                              setFormError('');
                              setFormMessage('');
                            }}
                          >
                            {isSelected ? 'Selected' : 'Apply Now'}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <div>
            <ScrollReveal delay={0.08}>
              <div className="sticky top-32 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <div className="bg-slate-900 px-7 py-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">
                    Apply Online
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">
                    {selectedJob ? selectedJob.title : 'Choose a role to start'}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {isReady && isAuthenticated
                      ? 'Submit your application directly using your logged-in user account.'
                      : 'Login with your user account to apply for any open position.'}
                  </p>
                </div>

                <div className="px-7 py-7">
                  <form onSubmit={handleApply} className="space-y-5">
                    <Input
                      value={selectedJob?.title ?? ''}
                      readOnly
                      placeholder="Selected role"
                      className="h-12 bg-slate-50"
                    />
                    <Input
                      value={experience}
                      onChange={(event) => setExperience(event.target.value)}
                      placeholder="Experience (for example: 3 years in critical care)"
                      className="h-12"
                    />
                    <Textarea
                      value={coverLetter}
                      onChange={(event) => setCoverLetter(event.target.value)}
                      placeholder="Short cover letter"
                      className="min-h-[160px]"
                    />

                    {formError && (
                      <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {formError}
                      </p>
                    )}

                    {formMessage && (
                      <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                        {formMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      className="h-12 w-full bg-primary text-white hover:bg-red-500"
                      disabled={submitting || !selectedJob}
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </form>

                  <div className="mt-6 rounded-3xl bg-blue-50 p-5 text-sm leading-7 text-slate-600">
                    <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900">
                      <FileText className="h-4 w-4 text-sky-700" />
                      Application note
                    </div>
                    You can apply only once per role. If you are not logged in, the page will send
                    you to the login page first.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
