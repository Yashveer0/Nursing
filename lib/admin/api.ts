import { readAuthSession } from '@/lib/userAuth/storage';
import type { AuthUser } from '@/lib/userAuth/types';

export type AdminRole = 'ADMIN' | 'SUB_ADMIN';

type ApiErrorDetail = {
  msg?: string;
  message?: string;
};

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: ApiErrorDetail[];
};

export type AdminJob = {
  _id: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary?: string;
  status: 'OPEN' | 'CLOSED';
  createdAt: string;
};

export type JobApplication = {
  _id: string;
  status: 'Applied' | 'Shortlisted' | 'Rejected' | 'Hired';
  experience?: string;
  coverLetter?: string;
  createdAt: string;
  applicant: {
    _id: string;
    name: string;
    email: string;
    phone?: string;
  };
};

export type SubAdminUser = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'SUB_ADMIN';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

type JobsResponseData = {
  jobs: AdminJob[];
};

type JobApplicationsResponseData = {
  job: string;
  applications: JobApplication[];
};

type SubAdminsResponseData = {
  subAdmins: SubAdminUser[];
};

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, '') ?? 'http://localhost:5000/api'
  );
}

function getAdminSession() {
  const session = readAuthSession();

  if (!session?.accessToken || !session.user) {
    throw new Error('Please login to continue.');
  }

  if (session.user.role !== 'ADMIN' && session.user.role !== 'SUB_ADMIN') {
    throw new Error('Admin access is restricted to Admin and Sub-Admin accounts.');
  }

  return session;
}

function normalizeErrorMessage(message: string, errors?: ApiErrorDetail[]) {
  if (!errors || errors.length === 0) {
    return message;
  }

  return errors[0].msg || errors[0].message || message;
}

async function request<T>(path: string, init: RequestInit = {}) {
  const session = getAdminSession();

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.accessToken}`,
      ...(init.headers ?? {}),
    },
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    throw new Error(
      normalizeErrorMessage(payload?.message ?? 'Request failed.', payload?.errors)
    );
  }

  return payload;
}

export function isAdminUser(user: AuthUser | null | undefined): user is AuthUser & { role: AdminRole } {
  return Boolean(user && (user.role === 'ADMIN' || user.role === 'SUB_ADMIN'));
}

export async function getAdminJobs() {
  const response = await request<JobsResponseData>('/jobs/admin/all');
  return response.data?.jobs ?? [];
}

export async function createAdminJob(payload: {
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary?: string;
  status?: 'OPEN' | 'CLOSED';
}) {
  return request('/jobs', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateAdminJob(
  id: string,
  payload: {
    title?: string;
    description?: string;
    requirements?: string;
    location?: string;
    salary?: string;
    status?: 'OPEN' | 'CLOSED';
  }
) {
  return request(`/jobs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

export async function deleteAdminJob(id: string) {
  return request(`/jobs/${id}`, {
    method: 'DELETE',
  });
}

export async function getApplicationsForJob(jobId: string) {
  const response = await request<JobApplicationsResponseData>(`/applications/job/${jobId}`);
  return response.data?.applications ?? [];
}

export async function getSubAdmins() {
  const response = await request<SubAdminsResponseData>('/admin/subadmins');
  return response.data?.subAdmins ?? [];
}

export async function createSubAdmin(payload: {
  name: string;
  email: string;
  phone?: string;
  password: string;
}) {
  return request('/admin/create-subadmin', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function updateSubAdminStatus(id: string, isActive: boolean) {
  return request(`/admin/subadmin/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ isActive }),
  });
}

export async function deleteSubAdmin(id: string) {
  return request(`/admin/subadmin/${id}`, {
    method: 'DELETE',
  });
}
