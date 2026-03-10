import { readAuthSession } from '@/lib/userAuth/storage';

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

export type CareerJob = {
  _id: string;
  title: string;
  description: string;
  requirements: string;
  location: string;
  salary?: string;
  status: 'OPEN' | 'CLOSED';
  createdAt: string;
};

export type UserApplication = {
  _id: string;
  status: 'Applied' | 'Shortlisted' | 'Rejected' | 'Hired';
  experience?: string;
  coverLetter?: string;
  createdAt: string;
  job: {
    _id: string;
    title: string;
    location: string;
    salary?: string;
    status: 'OPEN' | 'CLOSED';
  };
};

type JobsResponseData = {
  jobs: CareerJob[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
};

type ApplicationsResponseData = {
  applications: UserApplication[];
};

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, '') ?? 'http://localhost:5000/api'
  );
}

function normalizeErrorMessage(message: string, errors?: ApiErrorDetail[]) {
  if (!errors || errors.length === 0) {
    return message;
  }

  return errors[0].msg || errors[0].message || message;
}

async function request<T>(path: string, init: RequestInit = {}) {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
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

export async function getCareers() {
  const response = await request<JobsResponseData>('/jobs');
  return response.data?.jobs ?? [];
}

export async function applyToCareer(jobId: string, experience: string, coverLetter: string) {
  const session = readAuthSession();

  if (!session?.accessToken) {
    throw new Error('Please login to apply for a job.');
  }

  return request('/applications/apply', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
    body: JSON.stringify({
      jobId,
      experience,
      coverLetter,
    }),
  });
}

export async function getMyApplications() {
  const session = readAuthSession();

  if (!session?.accessToken) {
    throw new Error('Please login to view your applications.');
  }

  const response = await request<ApplicationsResponseData>('/applications/my-applications', {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });

  return response.data?.applications ?? [];
}
