import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      <Header />
      <LoginForm />
      <Footer />
    </main>
  );
}
