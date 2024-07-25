'use client';

import { useAuth } from '@/hooks/auth';
import Loading from './Loading';
import Navigation from './Navigation';

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' });

    if (!user) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            <main className="sm:ml-[200px]">{children}</main>
        </div>
    );
};

export default AppLayout;
