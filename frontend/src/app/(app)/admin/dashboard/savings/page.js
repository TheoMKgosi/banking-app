//TODO: make a savings hook
//TODO: make a search

'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Header from '../../Header';

const Page = () => {
    const [savings, setSavings] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        //WARNING: incomplete fetch should use SWR
        const fetchSavings = async () => {
            try {
                const response = await axios.get('/api/admin/savings');
                setSavings(response.data);
                console.log(response.data);
                setError('');
            } catch (error) {
                setError('Failed to fetch savings accounts.');
            }
        };

        fetchSavings();
    }, []);
    return (
        <>
            <Header title={'Savings'} />
            <div className="pt-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <form className="flex">
                                <Input
                                    placeholder="Search..."
                                    className={'w-full'}
                                />
                                <Button>
                                    <FaMagnifyingGlass />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <ul>
                                {savings.map((saving) => (
                                    <li key={saving.id}>
                                        {' '}
                                        User: {saving.user.name} Account Number:
                                        {saving.account_number} Balance:
                                        {saving.balance}
                                    </li>
                                ))}
                            </ul>
                            {error && <p>{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Page;
