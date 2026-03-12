'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CalendarDays, FileText, Mail, Phone, ShieldCheck, User } from 'lucide-react';
import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth-provider';
import { getMyApplications, type UserApplication } from '@/lib/careers/api';
import { getMyProfile, updateMyProfile } from '@/lib/userAuth/profile';

const statusStyles: Record<UserApplication['status'], string> = {
  Applied: 'bg-blue-100 text-blue-700',
  Shortlisted: 'bg-amber-100 text-amber-700',
  Rejected: 'bg-red-100 text-red-700',
  Hired: 'bg-emerald-100 text-emerald-700',
};

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isReady, updateUser } = useAuth();
  const [applications, setApplications] = useState<UserApplication[]>([]);
  const [loadingApplications, setLoadingApplications] = useState(true);
  const [applicationsError, setApplicationsError] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileError, setProfileError] = useState('');
  const [profileSuccess, setProfileSuccess] = useState('');
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isReady, router]);

  useEffect(() => {
    if (user) {
      setName(user.name ?? '');
      setPhone(user.phone ?? '');
    }
  }, [user]);

  useEffect(() => {
    if (!isReady || !isAuthenticated) {
      return;
    }

    let active = true;

    async function loadProfile() {
      try {
        const response = await getMyProfile();
        if (!active || !response.data?.user) {
          return;
        }

        updateUser(response.data.user);
        setName(response.data.user.name ?? '');
        setPhone(response.data.user.phone ?? '');
        setProfileError('');
      } catch (error) {
        if (active) {
          setProfileError(
            error instanceof Error ? error.message : 'Unable to load your profile.'
          );
        }
      } finally {
        if (active) {
          setProfileLoading(false);
        }
      }
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, [isAuthenticated, isReady, updateUser]);

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
          setApplicationsError('');
        }
      } catch (error) {
        if (active) {
          setApplicationsError(
            error instanceof Error ? error.message : 'Unable to load your application statuses.'
          );
        }
      } finally {
        if (active) {
          setLoadingApplications(false);
        }
      }
    }

    void loadApplications();

    return () => {
      active = false;
    };
  }, [isAuthenticated, isReady]);

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

  const latestApplications = applications.slice(0, 3);
  const normalizedName = name.trim();
  const normalizedPhone = phone.trim();

  async function handleProfileUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProfileError('');
    setProfileSuccess('');

    if (normalizedName.length < 2) {
      setProfileError('Name must be at least 2 characters.');
      return;
    }

    if (normalizedPhone && !/^\d{10}$/.test(normalizedPhone)) {
      setProfileError('Phone number must be exactly 10 digits.');
      return;
    }

    setIsSavingProfile(true);

    try {
      const response = await updateMyProfile({
        name: normalizedName,
        phone: normalizedPhone || undefined,
      });

      if (!response.data?.user) {
        throw new Error('Profile update failed.');
      }

      updateUser(response.data.user);
      setName(response.data.user.name ?? '');
      setPhone(response.data.user.phone ?? '');
      setProfileSuccess(response.message || 'Profile updated successfully.');
    } catch (error) {
      setProfileError(
        error instanceof Error ? error.message : 'Unable to update your profile.'
      );
    } finally {
      setIsSavingProfile(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <Header />
      <section className="relative mt-18 overflow-hidden pt-28">
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
                  <form
                    onSubmit={handleProfileUpdate}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-500">Update Profile</p>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900">
                          Edit your account details
                        </h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                        <User className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-slate-600">Full Name</span>
                        <input
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400"
                          placeholder="Enter your full name"
                          disabled={profileLoading || isSavingProfile}
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-slate-600">Phone Number</span>
                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          value={phone}
                          onChange={(event) =>
                            setPhone(event.target.value.replace(/\D/g, '').slice(0, 10))
                          }
                          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400"
                          placeholder="10 digit phone number"
                          disabled={profileLoading || isSavingProfile}
                        />
                      </label>
                    </div>

                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                        <Mail className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium text-slate-500">Email Address</p>
                      <p className="mt-2 break-all text-base font-semibold text-slate-900">
                        {user.email}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Email is read-only because your backend update route only supports name and
                        phone.
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <Button
                        type="submit"
                        className="rounded-full bg-sky-700 text-white hover:bg-sky-800"
                        disabled={profileLoading || isSavingProfile}
                      >
                        {isSavingProfile ? 'Saving...' : 'Save Profile'}
                      </Button>
                      {profileLoading && (
                        <p className="text-sm text-slate-500">Loading latest profile details...</p>
                      )}
                      {!profileLoading && profileError && (
                        <p className="text-sm text-red-600">{profileError}</p>
                      )}
                      {!profileLoading && !profileError && profileSuccess && (
                        <p className="text-sm text-emerald-600">{profileSuccess}</p>
                      )}
                    </div>
                  </form>

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
                        <Phone className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-500">Phone Number</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        {user.phone || 'Not added'}
                      </p>
                    </div>
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

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-sky-200 hover:bg-sky-50/60">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <FileText className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Career Applications</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">
                      Track all jobs you have applied for and review each application status.
                    </p>
                    <div className="mt-5 space-y-3">
                      {loadingApplications && (
                        <p className="text-sm text-slate-500">Loading application statuses...</p>
                      )}
                      {!loadingApplications && applicationsError && (
                        <p className="text-sm text-red-600">{applicationsError}</p>
                      )}
                      {!loadingApplications && !applicationsError && applications.length === 0 && (
                        <p className="text-sm text-slate-500">No job applications found yet.</p>
                      )}
                      {!loadingApplications &&
                        !applicationsError &&
                        latestApplications.map((application) => (
                          <div
                            key={application._id}
                            className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-medium text-slate-900">
                                  {application.job?.title ?? 'Job'}
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                  {application.job?.location ?? 'Location not available'}
                                </p>
                              </div>
                              <span
                                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[application.status]}`}
                              >
                                {application.status}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
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
