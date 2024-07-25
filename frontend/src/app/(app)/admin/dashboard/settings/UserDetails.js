'use client';

import { useAuth } from '@/hooks/auth';

const UserDetails = () => {
    const { user } = useAuth({ middleware: 'auth' });
    return (
        <div>
            <h2 className="text-xl">User</h2>
            <div className="p-2">
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
                <p>Created: {user?.created_at}</p>
            </div>
        </div>
    );
};

export default UserDetails;
