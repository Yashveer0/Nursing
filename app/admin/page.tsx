'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BriefcaseBusiness,
  ClipboardList,
  FileText,
  LayoutDashboard,
  LogOut,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/components/auth/auth-provider';
import {
  createAdminBlog,
  createAdminJob,
  createSubAdmin,
  deleteAdminBlog,
  deleteAdminJob,
  deleteSubAdmin,
  getAdminBlogs,
  getAdminJobs,
  getApplicationsForJob,
  getSubAdmins,
  isAdminUser,
  updateAdminBlog,
  updateAdminJob,
  updateSubAdminStatus,
  type AdminBlog,
  type AdminJob,
  type JobApplication,
  type SubAdminUser,
} from '@/lib/admin/api';
import { readAuthSession } from '@/lib/userAuth/storage';

type AdminTab = 'overview' | 'jobs' | 'blogs' | 'applications' | 'subadmins';

const tabs: Array<{ id: AdminTab; label: string; icon: typeof LayoutDashboard }> = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'jobs', label: 'Jobs', icon: BriefcaseBusiness },
  { id: 'blogs', label: 'Blogs', icon: FileText },
  { id: 'applications', label: 'Applications', icon: ClipboardList },
  { id: 'subadmins', label: 'Sub-Admins', icon: Shield },
];

export default function AdminPage() {
  const router = useRouter();
  const { user, isReady, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [jobs, setJobs] = useState<AdminJob[]>([]);
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [subAdmins, setSubAdmins] = useState<SubAdminUser[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [selectedJobId, setSelectedJobId] = useState('');
  const [editingJobId, setEditingJobId] = useState('');
  const [editingBlogId, setEditingBlogId] = useState('');
  const [loadingDashboard, setLoadingDashboard] = useState(false);
  const [loadingApplications, setLoadingApplications] = useState(false);
  const [pageError, setPageError] = useState('');
  const [actionMessage, setActionMessage] = useState('');

  useEffect(() => {
    if (!isReady || !isAdminUser(user)) {
      return;
    }

    void refreshDashboard();
  }, [isReady, user]);

  useEffect(() => {
    if (!isReady || !isAdminUser(user) || !selectedJobId) {
      setApplications([]);
      return;
    }

    void loadApplications(selectedJobId);
  }, [isReady, selectedJobId, user]);

  async function refreshDashboard() {
    if (!isAdminUser(user)) {
      return;
    }

    setLoadingDashboard(true);
    setPageError('');

    try {
      const [jobData, blogData, subAdminData] = await Promise.all([
        getAdminJobs(),
        getAdminBlogs(),
        user.role === 'ADMIN' ? getSubAdmins() : Promise.resolve([]),
      ]);

      setJobs(jobData);
      setBlogs(blogData);
      setSubAdmins(subAdminData);

      if (!selectedJobId && jobData.length > 0) {
        setSelectedJobId(jobData[0]._id);
      }
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to load admin dashboard.');
    } finally {
      setLoadingDashboard(false);
    }
  }

  async function loadApplications(jobId: string) {
    setLoadingApplications(true);

    try {
      const data = await getApplicationsForJob(jobId);
      setApplications(data);
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to load job applications.');
    } finally {
      setLoadingApplications(false);
    }
  }

  async function handleAdminLogin(email: string, password: string) {
    setPageError('');

    const result = await login(email, password);
    if (!result.success) {
      setPageError(result.message ?? 'Login failed.');
      return;
    }

    const session = readAuthSession();
    if (!isAdminUser(session?.user ?? null)) {
      logout();
      setPageError('This account does not have admin access.');
      return;
    }

    void refreshDashboard();
  }

  async function handleCreateJob(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActionMessage('');
    setPageError('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      await createAdminJob({
        title: String(form.get('title') || ''),
        description: String(form.get('description') || ''),
        requirements: String(form.get('requirements') || ''),
        location: String(form.get('location') || ''),
        salary: String(form.get('salary') || ''),
        status: String(form.get('status') || 'OPEN') as 'OPEN' | 'CLOSED',
      });
      formElement.reset();
      setActionMessage('Job created successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to create job.');
    }
  }

  async function handleCreateBlog(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActionMessage('');
    setPageError('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      await createAdminBlog({
        title: String(form.get('title') || ''),
        slug: String(form.get('slug') || ''),
        content: String(form.get('content') || ''),
        metaTitle: String(form.get('metaTitle') || ''),
        metaDescription: String(form.get('metaDescription') || ''),
        featuredImage: String(form.get('featuredImage') || ''),
        status: String(form.get('status') || 'DRAFT') as 'DRAFT' | 'PUBLISHED',
        schemaToggle: form.get('schemaToggle') === 'on',
      });
      formElement.reset();
      setActionMessage('Blog created successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to create blog.');
    }
  }

  async function handleCreateSubAdmin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActionMessage('');
    setPageError('');

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      await createSubAdmin({
        name: String(form.get('name') || ''),
        email: String(form.get('email') || ''),
        phone: String(form.get('phone') || ''),
        password: String(form.get('password') || ''),
      });
      formElement.reset();
      setActionMessage('Sub-admin created successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to create sub-admin.');
    }
  }

  async function handleUpdateBlog(event: FormEvent<HTMLFormElement>, blogId: string) {
    event.preventDefault();
    setActionMessage('');
    setPageError('');

    const form = new FormData(event.currentTarget);

    try {
      await updateAdminBlog(blogId, {
        title: String(form.get('title') || ''),
        slug: String(form.get('slug') || ''),
        content: String(form.get('content') || ''),
        metaTitle: String(form.get('metaTitle') || ''),
        metaDescription: String(form.get('metaDescription') || ''),
        featuredImage: String(form.get('featuredImage') || ''),
        status: String(form.get('status') || 'DRAFT') as 'DRAFT' | 'PUBLISHED',
        schemaToggle: form.get('schemaToggle') === 'on',
      });
      setEditingBlogId('');
      setActionMessage('Blog updated successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to update blog.');
    }
  }

  async function handleUpdateJob(event: FormEvent<HTMLFormElement>, jobId: string) {
    event.preventDefault();
    setActionMessage('');
    setPageError('');

    const form = new FormData(event.currentTarget);

    try {
      await updateAdminJob(jobId, {
        title: String(form.get('title') || ''),
        description: String(form.get('description') || ''),
        requirements: String(form.get('requirements') || ''),
        location: String(form.get('location') || ''),
        salary: String(form.get('salary') || ''),
        status: String(form.get('status') || 'OPEN') as 'OPEN' | 'CLOSED',
      });
      setEditingJobId('');
      setActionMessage('Job updated successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to update job.');
    }
  }

  async function handleDeleteBlog(blogId: string) {
    setActionMessage('');
    setPageError('');

    try {
      await deleteAdminBlog(blogId);
      if (editingBlogId === blogId) {
        setEditingBlogId('');
      }
      setActionMessage('Blog deleted successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to delete blog.');
    }
  }

  async function handleDeleteJob(jobId: string) {
    setActionMessage('');
    setPageError('');

    try {
      await deleteAdminJob(jobId);
      if (selectedJobId === jobId) {
        setSelectedJobId('');
        setApplications([]);
      }
      if (editingJobId === jobId) {
        setEditingJobId('');
      }
      setActionMessage('Job deleted successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to delete job.');
    }
  }

  async function handleToggleSubAdmin(subAdmin: SubAdminUser) {
    setActionMessage('');
    setPageError('');

    try {
      await updateSubAdminStatus(subAdmin._id, !subAdmin.isActive);
      setActionMessage(`Sub-admin ${subAdmin.isActive ? 'deactivated' : 'activated'} successfully.`);
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to update sub-admin status.');
    }
  }

  async function handleDeleteSubAdmin(id: string) {
    setActionMessage('');
    setPageError('');

    try {
      await deleteSubAdmin(id);
      setActionMessage('Sub-admin deactivated successfully.');
      await refreshDashboard();
    } catch (error) {
      setPageError(error instanceof Error ? error.message : 'Unable to deactivate sub-admin.');
    }
  }

  if (!isReady) {
    return null;
  }

  if (!user) {
    return <AdminLoginScreen onLogin={handleAdminLogin} error={pageError} />;
  }

  if (!isAdminUser(user)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
        <Card className="w-full max-w-xl border-slate-200 bg-white">
          <CardHeader>
            <CardTitle>Admin Access Restricted</CardTitle>
            <CardDescription>
              Your backend account is authenticated, but its role is `{user.role}`. Only `ADMIN` and
              `SUB_ADMIN` can use this dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Button onClick={() => router.push('/profile')} variant="outline">
              Go to Profile
            </Button>
            <Button
              onClick={() => {
                logout();
                router.refresh();
              }}
            >
              Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const openJobs = jobs.filter((job) => job.status === 'OPEN').length;
  const publishedBlogs = blogs.filter((blog) => blog.status === 'PUBLISHED').length;

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-[#0f172a] p-6 text-white lg:flex lg:flex-col">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Admin Console</p>
            <h1 className="mt-3 text-2xl font-semibold">Nursing Sarathi</h1>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="mt-1 text-sm text-slate-300">{user.email}</p>
              <p className="mt-2 inline-flex rounded-full bg-sky-500/20 px-3 py-1 text-xs font-medium text-sky-200">
                {user.role}
              </p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {tabs
              .filter((tab) => tab.id !== 'subadmins' || user.role === 'ADMIN')
              .map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
          </nav>

          <div className="mt-auto">
            <Button
              variant="outline"
              className="w-full justify-start border-white/15 bg-transparent text-white hover:bg-white hover:text-slate-900"
              onClick={() => {
                logout();
                router.refresh();
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        <section className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-4 rounded-[28px] bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-sky-700">
                Backend Integrated Dashboard
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Admin Operations</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={() => router.push('/profile')}>
                User Profile
              </Button>
              <Button
                onClick={() => {
                  logout();
                  router.refresh();
                }}
              >
                Logout
              </Button>
            </div>
          </div>

          {pageError && (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {pageError}
            </div>
          )}

          {actionMessage && (
            <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {actionMessage}
            </div>
          )}

          {loadingDashboard ? (
            <Card>
              <CardContent className="py-10 text-sm text-slate-600">Loading dashboard...</CardContent>
            </Card>
          ) : (
            <>
              {(activeTab === 'overview' || activeTab === 'jobs' || activeTab === 'blogs' || activeTab === 'applications') && (
                <div className="mb-6 grid gap-4 md:grid-cols-3">
                  <StatCard
                    label={activeTab === 'blogs' ? 'Total Blogs' : 'Total Jobs'}
                    value={String(activeTab === 'blogs' ? blogs.length : jobs.length)}
                  />
                  <StatCard
                    label={activeTab === 'blogs' ? 'Published Blogs' : 'Open Jobs'}
                    value={String(activeTab === 'blogs' ? publishedBlogs : openJobs)}
                  />
                  <StatCard
                    label="Sub-Admins"
                    value={user.role === 'ADMIN' ? String(subAdmins.length) : 'Restricted'}
                  />
                </div>
              )}

              {activeTab === 'overview' && (
                <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Latest Jobs</CardTitle>
                      <CardDescription>Backend data from `/api/jobs/admin/all`</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {jobs.slice(0, 5).map((job) => (
                        <div key={job._id} className="rounded-2xl border border-slate-200 p-4">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-medium text-slate-900">{job.title}</p>
                              <p className="text-sm text-slate-500">{job.location}</p>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              {job.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Latest Blogs</CardTitle>
                      <CardDescription>Backend data from `/api/blogs`</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {blogs.slice(0, 5).map((blog) => (
                        <div key={blog._id} className="rounded-2xl border border-slate-200 p-4">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-medium text-slate-900">{blog.title}</p>
                              <p className="text-sm text-slate-500">/{blog.slug}</p>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              {blog.status}
                            </span>
                          </div>
                        </div>
                      ))}
                      {blogs.length === 0 && <p className="text-sm text-slate-600">No blogs created yet.</p>}
                    </CardContent>
                  </Card>

                  <Card className="xl:col-span-2">
                    <CardHeader>
                      <CardTitle>Backend Review Summary</CardTitle>
                      <CardDescription>
                        Only real backend-supported modules are shown in this admin UI.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-slate-600">
                      <p>`/api/auth/login` handles admin and sub-admin login based on `user.role`.</p>
                      <p>`/api/admin/*` supports sub-admin management for ADMIN users.</p>
                      <p>`/api/blogs` now drives blog create, update, list, and admin-only delete.</p>
                      <p>`/api/jobs/admin/all` and `/api/applications/job/:jobId` drive jobs and applications.</p>
                      <p>CMS, testimonials, and leads remain outside the current backend contract, so they are still excluded.</p>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'jobs' && (
                <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create Job</CardTitle>
                      <CardDescription>Uses backend validation from `/api/jobs`.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateJob} className="space-y-4">
                        <Input name="title" placeholder="Job title" required />
                        <Input name="location" placeholder="Location" required />
                        <Input name="salary" placeholder="Salary (optional)" />
                        <Input name="status" placeholder="OPEN or CLOSED" defaultValue="OPEN" required />
                        <Textarea name="description" placeholder="Job description" className="min-h-[120px]" required />
                        <Textarea name="requirements" placeholder="Requirements" className="min-h-[120px]" required />
                        <Button type="submit" className="w-full">Create Job</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Job Listings</CardTitle>
                      <CardDescription>
                        {user.role === 'ADMIN'
                          ? 'Current backend-managed jobs with edit and delete actions.'
                          : 'Current backend-managed jobs. Editing and deletion are restricted to ADMIN users.'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {jobs.map((job) => (
                        <div key={job._id} className="rounded-2xl border border-slate-200 p-4">
                          {editingJobId === job._id && user.role === 'ADMIN' ? (
                            <form onSubmit={(event) => handleUpdateJob(event, job._id)} className="space-y-3">
                              <Input name="title" defaultValue={job.title} required />
                              <Input name="location" defaultValue={job.location} required />
                              <Input name="salary" defaultValue={job.salary || ''} />
                              <Input name="status" defaultValue={job.status} required />
                              <Textarea
                                name="description"
                                defaultValue={job.description}
                                className="min-h-[110px]"
                                required
                              />
                              <Textarea
                                name="requirements"
                                defaultValue={job.requirements}
                                className="min-h-[110px]"
                                required
                              />
                              <div className="flex flex-wrap gap-2">
                                <Button type="submit">Save Changes</Button>
                                <Button type="button" variant="outline" onClick={() => setEditingJobId('')}>
                                  Cancel
                                </Button>
                              </div>
                            </form>
                          ) : (
                            <>
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                  <p className="font-medium text-slate-900">{job.title}</p>
                                  <p className="text-sm text-slate-500">{job.location}</p>
                                  <p className="mt-2 text-sm text-slate-600">{job.description}</p>
                                </div>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                  {job.status}
                                </span>
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {user.role === 'ADMIN' ? (
                                  <>
                                    <Button variant="outline" onClick={() => setEditingJobId(job._id)}>
                                      Edit Job
                                    </Button>
                                    <Button variant="destructive" onClick={() => handleDeleteJob(job._id)}>
                                      Delete Job
                                    </Button>
                                  </>
                                ) : (
                                  <span className="text-sm text-slate-500">
                                    Only ADMIN can edit or delete jobs.
                                  </span>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'blogs' && (
                <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create Blog</CardTitle>
                      <CardDescription>Uses backend validation from `/api/blogs`.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateBlog} className="space-y-4">
                        <Input name="title" placeholder="Blog title" required />
                        <Input name="slug" placeholder="blog-slug" required />
                        <Input name="metaTitle" placeholder="Meta title (optional)" />
                        <Textarea
                          name="metaDescription"
                          placeholder="Meta description (optional)"
                          className="min-h-[90px]"
                        />
                        <Input name="featuredImage" placeholder="Featured image URL (optional)" />
                        <Input name="status" placeholder="DRAFT or PUBLISHED" defaultValue="DRAFT" required />
                        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            name="schemaToggle"
                            defaultChecked
                            className="h-4 w-4 rounded border-slate-300"
                          />
                          Enable article schema markup
                        </label>
                        <Textarea
                          name="content"
                          placeholder="Blog content"
                          className="min-h-[220px]"
                          required
                        />
                        <Button type="submit" className="w-full">Create Blog</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Blog Listings</CardTitle>
                      <CardDescription>
                        {user.role === 'ADMIN'
                          ? 'Create, edit, and delete backend-managed blog posts.'
                          : 'Create and edit backend-managed blog posts. Deletion is restricted to ADMIN users.'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {blogs.length === 0 && (
                        <p className="text-sm text-slate-600">No blogs found in the backend yet.</p>
                      )}
                      {blogs.map((blog) => (
                        <div key={blog._id} className="rounded-2xl border border-slate-200 p-4">
                          {editingBlogId === blog._id ? (
                            <form onSubmit={(event) => handleUpdateBlog(event, blog._id)} className="space-y-3">
                              <Input name="title" defaultValue={blog.title} required />
                              <Input name="slug" defaultValue={blog.slug} required />
                              <Input name="metaTitle" defaultValue={blog.metaTitle || ''} />
                              <Textarea
                                name="metaDescription"
                                defaultValue={blog.metaDescription || ''}
                                className="min-h-[90px]"
                              />
                              <Input name="featuredImage" defaultValue={blog.featuredImage || ''} />
                              <Input name="status" defaultValue={blog.status} required />
                              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                                <input
                                  type="checkbox"
                                  name="schemaToggle"
                                  defaultChecked={blog.schemaToggle}
                                  className="h-4 w-4 rounded border-slate-300"
                                />
                                Enable article schema markup
                              </label>
                              <Textarea
                                name="content"
                                defaultValue={blog.content}
                                className="min-h-[220px]"
                                required
                              />
                              <div className="flex flex-wrap gap-2">
                                <Button type="submit">Save Changes</Button>
                                <Button type="button" variant="outline" onClick={() => setEditingBlogId('')}>
                                  Cancel
                                </Button>
                              </div>
                            </form>
                          ) : (
                            <>
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="space-y-2">
                                  <p className="font-medium text-slate-900">{blog.title}</p>
                                  <p className="text-sm text-slate-500">Slug: /{blog.slug}</p>
                                  <p className="text-sm text-slate-600">
                                    {blog.metaTitle || 'No meta title'}{blog.metaDescription ? ` • ${blog.metaDescription}` : ''}
                                  </p>
                                  <p className="text-sm text-slate-600">{blog.content}</p>
                                  <p className="text-xs text-slate-500">
                                    Schema: {blog.schemaToggle ? 'Enabled' : 'Disabled'}
                                  </p>
                                </div>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                  {blog.status}
                                </span>
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <Button variant="outline" onClick={() => setEditingBlogId(blog._id)}>
                                  Edit Blog
                                </Button>
                                {user.role === 'ADMIN' ? (
                                  <Button variant="destructive" onClick={() => handleDeleteBlog(blog._id)}>
                                    Delete Blog
                                  </Button>
                                ) : (
                                  <span className="text-sm text-slate-500">
                                    Only ADMIN can delete blogs.
                                  </span>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'applications' && (
                <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Applications By Job</CardTitle>
                      <CardDescription>Select a backend job to inspect applicants.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {jobs.map((job) => (
                        <button
                          key={job._id}
                          onClick={() => setSelectedJobId(job._id)}
                          className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                            selectedJobId === job._id
                              ? 'border-sky-300 bg-sky-50'
                              : 'border-slate-200 hover:border-sky-200 hover:bg-slate-50'
                          }`}
                        >
                          <p className="font-medium text-slate-900">{job.title}</p>
                          <p className="text-sm text-slate-500">{job.location}</p>
                        </button>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Applicants</CardTitle>
                      <CardDescription>
                        {selectedJobId ? 'Backend data from `/api/applications/job/:jobId`.' : 'Choose a job first.'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {loadingApplications && (
                        <p className="text-sm text-slate-600">Loading applications...</p>
                      )}
                      {!loadingApplications && applications.length === 0 && (
                        <p className="text-sm text-slate-600">No applications found for the selected job.</p>
                      )}
                      {!loadingApplications && applications.map((application) => (
                        <div key={application._id} className="rounded-2xl border border-slate-200 p-4">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="font-medium text-slate-900">{application.applicant.name}</p>
                              <p className="text-sm text-slate-500">{application.applicant.email}</p>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              {application.status}
                            </span>
                          </div>
                          <p className="mt-3 text-sm text-slate-600">
                            <span className="font-medium text-slate-800">Experience:</span>{' '}
                            {application.experience || 'Not provided'}
                          </p>
                          <p className="mt-2 text-sm text-slate-600">
                            <span className="font-medium text-slate-800">Cover letter:</span>{' '}
                            {application.coverLetter || 'Not provided'}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === 'subadmins' && user.role === 'ADMIN' && (
                <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create Sub-Admin</CardTitle>
                      <CardDescription>Restricted to ADMIN by backend role middleware.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateSubAdmin} className="space-y-4">
                        <Input name="name" placeholder="Full name" required />
                        <Input name="email" type="email" placeholder="Email address" required />
                        <Input name="phone" placeholder="Phone (optional)" />
                        <Input name="password" type="password" placeholder="Temporary password" required />
                        <Button type="submit" className="w-full">Create Sub-Admin</Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Sub-Admin Directory</CardTitle>
                      <CardDescription>Live backend data from `/api/admin/subadmins`.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {subAdmins.map((subAdmin) => (
                        <div key={subAdmin._id} className="rounded-2xl border border-slate-200 p-4">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="font-medium text-slate-900">{subAdmin.name}</p>
                              <p className="text-sm text-slate-500">{subAdmin.email}</p>
                              <p className="text-sm text-slate-500">{subAdmin.phone || 'No phone provided'}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Button variant="outline" onClick={() => handleToggleSubAdmin(subAdmin)}>
                                {subAdmin.isActive ? 'Deactivate' : 'Activate'}
                              </Button>
                              <Button variant="destructive" onClick={() => handleDeleteSubAdmin(subAdmin._id)}>
                                Disable
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Card className="border-slate-200 bg-white">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
}

function AdminLoginScreen({
  onLogin,
  error,
}: {
  onLogin: (email: string, password: string) => Promise<void>;
  error: string;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    await onLogin(email, password);
    setSubmitting(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_52%,#38bdf8_100%)] px-4">
      <Card className="w-full max-w-lg border-white/20 bg-white text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.3)]">
        <CardHeader>
          <CardDescription className="text-sky-700">Backend-integrated admin login</CardDescription>
          <CardTitle className="text-3xl">Admin Console Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@nursingsarathi.com"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
            />
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
