'use client';

import {
  useCallback,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { loginUser, registerUser } from '@/lib/userAuth/api';
import {
  clearAuthSession,
  readAuthSession,
  writeAuthSession,
} from '@/lib/userAuth/storage';
import type { AuthSession, AuthUser } from '@/lib/userAuth/types';

type AuthResult = {
  success: boolean;
  message?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isReady: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  register: (name: string, email: string, password: string) => Promise<AuthResult>;
  logout: () => void;
  updateUser: (nextUser: AuthUser) => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedSession = readAuthSession();
    setSession(storedSession);
    setUser(storedSession?.user ?? null);
    setIsReady(true);
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<AuthResult> => {
    try {
      const response = await loginUser({
        email: email.trim().toLowerCase(),
        password,
      });
      const nextSession = response.data;

      if (!nextSession) {
        return { success: false, message: 'Login failed.' };
      }

      setSession(nextSession);
      setUser(nextSession.user);
      writeAuthSession(nextSession);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Login failed.',
      };
    }
  }, []);

  const register = useCallback(async (
    name: string,
    email: string,
    password: string
  ): Promise<AuthResult> => {
    try {
      await registerUser({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
      });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Registration failed.',
      };
    }
  }, []);

  const logout = useCallback(() => {
    setSession(null);
    setUser(null);
    clearAuthSession();
  }, []);

  const updateUser = useCallback((nextUser: AuthUser) => {
    setUser(nextUser);
    setSession((currentSession) => {
      if (!currentSession) {
        return currentSession;
      }

      const nextSession = {
        ...currentSession,
        user: nextUser,
      };

      writeAuthSession(nextSession);
      return nextSession;
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isReady,
      login,
      register,
      logout,
      updateUser,
    }),
    [isReady, login, logout, register, updateUser, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider.');
  }
  return context;
}
