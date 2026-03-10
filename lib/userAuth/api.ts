import type {
  ApiResponse,
  LoginPayload,
  LoginResponseData,
  RegisterPayload,
  RegisterResponseData,
} from '@/lib/userAuth/types';

const DEFAULT_API_BASE_URL = 'http://localhost:5000/api';

function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, '') ?? DEFAULT_API_BASE_URL
  );
}

function buildUrl(path: string) {
  return `${getApiBaseUrl()}${path}`;
}

function normalizeErrorMessage(message: string, errors?: ApiResponse<unknown>['errors']) {
  if (errors && errors.length > 0) {
    const detail = errors[0];
    return detail.msg || detail.message || message;
  }

  return message;
}

async function request<T>(path: string, init: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(buildUrl(path), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    const message = normalizeErrorMessage(
      payload?.message ?? 'Request failed.',
      payload?.errors
    );
    throw new Error(message);
  }

  return payload;
}

export async function registerUser(payload: RegisterPayload) {
  return request<RegisterResponseData>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function loginUser(payload: LoginPayload) {
  return request<LoginResponseData>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
