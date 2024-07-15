import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink'
import { useAuth } from '@/hooks/auth'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navigation = ({ user }) => {
    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white border-b border-gray-100 sm:h-screen sm:w-[200px] sm:fixed sm:shadow">
            {/* Primary Navigation Menu */}
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex justify-between h-16 sm:flex-col sm:justify-between sm:h-screen">
                    <div className="flex sm:flex-col sm:space-y-9 sm:mt-3">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center sm:justify-center">
                            <Link href="/dashboard">
                                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden space-x-8 sm:space-x-0 sm:space-y-4 sm:ml-10 sm:flex sm:flex-col sm:m-auto">
                            <NavLink
                                href="/dashboard"
                                active={usePathname() === '/dashboard'}>
                                Dashboard
                            </NavLink>
                            <NavLink
                                href="/dashboard/loan"
                                active={usePathname() === '/dashboard/loan'}>
                                Loan
                            </NavLink>
                            <NavLink
                                href="/dashboard/savings"
                                active={usePathname() === '/dashboard/savings'}>
                                Savings
                            </NavLink>
                            <NavLink
                                href="/dashboard/settings"
                                active={usePathname() === '/dashboard/settings'}>
                                Settings
                            </NavLink>
                        </div>
                    </div>

                            {/* Authentication */}
                            <ResponsiveNavButton onClick={logout} className={'hidden sm:block sm:mb-3 sm:border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300'}>

                                Logout
                            </ResponsiveNavButton>

                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
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
                    <div className="pt-2 pb-3 space-y-3">
                        <ResponsiveNavLink
                            href="/dashboard"
                            active={usePathname() === '/dashboard'}>
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/dashboard/loan"
                            active={usePathname() === '/dashboard/loan'}>
                            Loan
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/dashboard/savings"
                            active={usePathname() === '/dashboard/savings'}>
                            Savings
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/dashboard/settings"
                            active={usePathname() === '/dashboard/settings'}>
                            Settings
                        </ResponsiveNavLink>
                    </div>

                    {/* Responsive Settings Options */}
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <svg
                                    className="h-10 w-10 fill-current text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <div className="font-medium text-base text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
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
    )
}

export default Navigation
