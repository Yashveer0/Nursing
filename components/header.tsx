'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ChevronDown,
  Menu,
  X,
  Globe,
  MapPin,
  Users,
  HelpCircle,
  ClipboardList,
  ShieldCheck,
  ImageIcon,
  Building2,
  Home,
  BriefcaseMedical,
  Stethoscope,
  Info,
  Contact,
  HeartPulse,
  Brain,
  Activity,
  Bone,
  Droplet,
  User,
  LogOut,
} from 'lucide-react';

import { Button } from './ui/button';
import { useAuth } from '@/components/auth/auth-provider';

/* ================= NAV ITEMS ================= */

const navItems = [
  { type: 'link', icon: Home, label: 'Home', href: '/' },

  {
    type: 'dropdown',
    label: 'Services',
    icon: BriefcaseMedical,
    items: [
      { icon: Stethoscope, label: "Injection Administration", href: "/injection" },
      { icon: Droplet, label: "IV Cannulation", href: "/iv-cannulation" },
      { icon: Activity, label: "Wound Dressing", href: "/wound-dressing" },
      { icon: Activity, label: "Catheterization", href: "/catheterization" },
      { icon: Activity, label: "Nasogastric Intubation", href: "/nasogastric-intubation" },
      { icon: ClipboardList, label: "All Services", href: "/all-services" },
    ]
  },

  {
    type: 'dropdown',
    label: 'Speciality',
    icon: ShieldCheck,
    items: [
      { icon: HeartPulse, label: "Cardiac Care", href: "/cardiac-care" },
      { icon: Activity, label: "Cancer Care", href: "/cancer-care" },
      { icon: Brain, label: "Neurosciences", href: "/neurosciences" },
      { icon: Activity, label: "Gastro Sciences", href: "/gastrosciences" },
      { icon: Bone, label: "Orthopaedics", href: "/orthopaedics" },
      { icon: Droplet, label: "Renal Care", href: "/renal-care" },
      { icon: ClipboardList, label: "View All Specialities", href: "/all-specialities" },
    ]
  },

  {
    type: 'dropdown',
    label: 'About',
    icon: Info,
    items: [
      { icon: ClipboardList, label: "Our Story", href: "/about" },
      { icon: HelpCircle, label: "Why Choose Us", href: "/why-us" },
      { icon: Users, label: "Our Team", href: "/team" },
      { icon: ImageIcon, label: "Gallery", href: "/gallery" },
    ]
  },

  { type: 'link', icon: BriefcaseMedical, label: 'Careers', href: '/careers' },

  {
    type: 'dropdown',
    label: 'Locations',
    icon: MapPin,
    items: [
      { icon: Building2, label: "Nursingsarathi Gurugram", href: "/locations-gurugram" },
      { icon: Building2, label: "Nursingsarathi Lucknow", href: "/locations-lucknow" },
      { icon: Building2, label: "Nursingsarathi Patna", href: "/locations-patna" },
      { icon: Building2, label: "Nursingsarathi Indore", href: "/locations-indore" },
      { icon: Building2, label: "Nursingsarathi Noida", href: "/locations-noida" },
      { icon: Building2, label: "Nursingsarathi Ranchi", href: "/locations-ranchi" },
      { icon: Building2, label: "Nursingsarathi Mediclinics", href: "/mediclinics" },
    ]
  },

  {
    type: 'dropdown',
    label: 'International Patients',
    icon: Globe,
    items: [
      { icon: Globe, label: "International Patients", href: "/international-patients" },
      { icon: HelpCircle, label: "Patient Help Desk", href: "/help-desk" },
      { icon: MapPin, label: "Plan Your Trip", href: "/plan-your-trip" },
      { icon: ClipboardList, label: "Request An Estimate", href: "/request-an-estimate" },
      { icon: ShieldCheck, label: "Insurance Partner Network", href: "/insurance-partner-network" },
    ]
  },

  { type: 'link', icon: Contact, label: 'Contact', href: '/contact' },
];

/* ================= HEADER ================= */

export default function Header() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const { user, isAuthenticated, isReady, logout } = useAuth();
  const profileLabel = user?.name?.trim() || 'Profile';

  const toggle = (key: string) =>
    setActive(active === key ? null : key);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-100 bg-blue-100/70 shadow-sm backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4 xl:h-24">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo_nursing.png"
                alt="Nursing Sarathi"
                width={180}
                height={46}
                className="w-28 sm:w-32 xl:w-[130px] object-contain"
                priority
              />
            </Link>

            <nav className="hidden xl:flex flex-1 items-center justify-center gap-1 text-[14px] font-medium flex-wrap">
              {navItems.map((item, index) => {
                if (item.type === 'link') return <NavLink key={index} {...item} />;
                if (item.type === 'dropdown') return <NavDropdown key={index} {...item} />;
                return null;
              })}
            </nav>

            <div className="hidden xl:flex shrink-0 items-center gap-2">
              {isReady && !isAuthenticated && (
                <Link href="/login">
                  <Button variant="outline" className="h-10 rounded-full px-4 text-sm">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}

              {isReady && isAuthenticated && (
                <>
                  <Link href="/profile">
                    <Button variant="outline" className="h-10 max-w-[220px] rounded-full px-4 text-sm">
                      <User className="h-4 w-4 mr-2" />
                      <span className="truncate">{profileLabel}</span>
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    onClick={logout}
                    className="h-10 rounded-full px-3 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-1.5" />
                    Logout
                  </Button>
                </>
              )}
            </div>

            <div className="flex xl:hidden items-center gap-2">
              <button
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-950/45 xl:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-24 z-50 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.22)] xl:hidden"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  if (item.type === 'link') {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  }

                  const isExpanded = active === item.label;

                  return (
                    <div key={index} className="rounded-2xl border border-slate-200">
                      <button
                        type="button"
                        onClick={() => toggle(item.label)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-slate-700"
                      >
                        <span className="flex items-center gap-3">
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t border-slate-200"
                          >
                            <div className="space-y-1 px-3 py-3">
                              {item.items.map((subItem: any, subIndex: number) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setActive(null);
                                  }}
                                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-primary"
                                >
                                  <subItem.icon className="h-4 w-4" />
                                  <span>{subItem.label}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-slate-200 pt-4">
                {isReady && !isAuthenticated && (
                  <Link href="/login" onClick={() => setOpen(false)} className="block">
                    <Button variant="outline" className="w-full rounded-full">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                )}

                {isReady && isAuthenticated && (
                  <div className="space-y-3">
                    <Link href="/profile" onClick={() => setOpen(false)} className="block">
                      <Button variant="outline" className="w-full rounded-full">
                        <User className="h-4 w-4 mr-2" />
                        <span className="truncate">{profileLabel}</span>
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setOpen(false);
                        logout();
                      }}
                      className="w-full rounded-full"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );

}

/* ================= NAV LINK ================= */

function NavLink({ icon: Icon, label, href }: any) {

return (

<Link
href={href}
className="flex items-center gap-1 px-2 py-2 rounded-md whitespace-nowrap text-gray-700 hover:text-primary hover:bg-gray-50 transition"
>

<Icon className="hidden xl:block h-4 w-4" />

<span>{label}</span>

</Link>

);

}

/* ================= NAV DROPDOWN ================= */

function NavDropdown({ label, icon: Icon, items }: any) {

return (

<div className="relative group">

<button className="flex items-center gap-1 px-2 py-2 rounded-md whitespace-nowrap text-gray-700 hover:text-primary hover:bg-gray-50 transition">

<Icon className="hidden xl:block h-4 w-4" />

<span>{label}</span>

<ChevronDown className="h-4 w-4 group-hover:rotate-180 transition" />

</button>

<div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">

<div className="p-2 grid gap-1">

{items.map((item: any, idx: number) => (

<Link
key={idx}
href={item.href}
className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm"
>

<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">

<item.icon className="w-4 h-4 text-primary" />

</div>

<span>{item.label}</span>

</Link>

))}

</div>

</div>

</div>

);

}
