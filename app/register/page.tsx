import Header from '@/components/header';
import { Footer } from '@/components/footer';
import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className='mt-15'>
        <Header />
      </div>
      
      <RegisterForm />
      <Footer />
    </main>
  );
}
