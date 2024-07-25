import Link from 'next/link';
import AuthCard from '@/app/(auth)/AuthCard';
import ApplicationLogo from '@/components/ApplicationLogo';
import { Suspense } from 'react';
import Loading from '../(app)/admin/Loading';

export const metadata = {
    title: 'Laravel',
};

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <Suspense fallback={<Loading />}>
                    <AuthCard
                        logo={
                            <Link href="/">
                                <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                            </Link>
                        }
                    >
                        {children}
                    </AuthCard>
                </Suspense>
            </div>
        </div>
    );
};

export default Layout;
