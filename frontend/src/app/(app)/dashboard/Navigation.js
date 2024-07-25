'use client'
import ApplicationLogo from '@/components/ApplicationLogo';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink';
import { useAuth } from '@/hooks/auth';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = ({ user }) => {
    const { logout } = useAuth();
    const path = usePathname();

    const [open, setOpen] = useState(false);

    return (
        <nav className="border-b border-gray-100 bg-white sm:fixed sm:h-screen sm:w-[200px] sm:shadow">
            {/* Primary Navigation Menu */}
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 justify-between sm:h-screen sm:flex-col sm:justify-between">
                    <div className="flex sm:mt-3 sm:flex-col sm:space-y-9">
                        {/* Logo */}
                        <div className="flex flex-shrink-0 items-center sm:justify-center">
                            <Link href="/dashboard">
                                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden space-x-8 sm:m-auto sm:ml-10 sm:flex sm:flex-col sm:space-x-0 sm:space-y-4">
                            <NavLink
                                href="/dashboard"
                                active={path === '/dashboard'}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                href="/dashboard/loan"
                                active={path === '/dashboard/loan'}
                            >
                                Loan
                            </NavLink>
                            <NavLink
                                href="/dashboard/savings"
                                active={path === '/dashboard/savings'}
                            >
                                Savings
                            </NavLink>
                            <NavLink
                                href="/dashboard/settings"
                                active={path === '/dashboard/settings'}
                            >
                                Settings
                            </NavLink>
                            {user.role == 'admin' && (
                                <NavLink
                                    href="/admin/dashboard/"
                                    active={
                                        path === '/dashboard/admin'
                                    }
                                >
                                    Admin
                                </NavLink>
                            )}
                        </div>
                    </div>

                    {/* Authentication */}
                    <ResponsiveNavButton
                        onClick={logout}
                        className={
                            'hidden text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 sm:mb-3 sm:block sm:border-transparent'
                        }
                    >
                        Logout
                    </ResponsiveNavButton>

                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen((open) => !open)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block sm:hidden">
                    <div className="space-y-3 pb-3 pt-2">
                        <ResponsiveNavLink
                            href="/dashboard"
                            active={usePathname() === '/dashboard'}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/dashboard/loan"
                            active={usePathname() === '/dashboard/loan'}
                        >
                            Loan
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/dashboard/savings"
                            active={usePathname() === '/dashboard/savings'}
                        >
                            Savings
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/dashboard/settings"
                            active={usePathname() === '/dashboard/settings'}
                        >
                            Settings
                        </ResponsiveNavLink>
                    </div>

                    {/* Responsive Settings Options */}
                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <svg
                                    className="h-10 w-10 fill-current text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <div className="text-base font-medium text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user?.email}
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            {/* Authentication */}
                            <ResponsiveNavButton onClick={logout}>
                                Logout
                            </ResponsiveNavButton>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
