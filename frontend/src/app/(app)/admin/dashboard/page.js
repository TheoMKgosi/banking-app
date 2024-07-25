'use client';
//TODO: display overall status of the company
import { useAuth } from '@/hooks/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../Header';

const Dashboard = () => {
    const router = useRouter();
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                if (user.role === 'admin') {
                    setIsAdmin(true);
                } else {
                    router.push('/dashboard');
                }
            } catch (error) {
                console.error('Error fetching user role:', error);
                router.push('/dashboard');
            }
        };
        fetchUserRole();
    }, []);
    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            You are logged in!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
