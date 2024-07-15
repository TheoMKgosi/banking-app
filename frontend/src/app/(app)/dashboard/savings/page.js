'use client';
import Header from '@/app/(app)/Header';
import Button from '@/components/Button';
import RedButton from '@/components/RedButton';
import axios from '@/lib/axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Save = () => {
    const [savings, setSavings] = useState([]);
    const [selectedSavings, setSelectedSavings] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('deposit');

    const handleTransaction = async (saving) => {
        const transactionData = {
            saving_id: saving,
            amount: parseFloat(amount),
            type,
        };
        try {
            const response = await axios.post(`/api/savings/${saving}/transaction`, transactionData,);

            setSuccess('Transaction completed successfully!');
            setError('');
        } catch (error) {
            //FIX: error message for transaction disappears
            if (error.response) {
                setError(`Error: ${error.response.data.message}`);
            } else if (error.request) {
                setError('Error: No response received from the server.');
            } else {
                setError(`Error: ${error.message}`);
            }
            setSuccess('');
        }
    };
    const createAccount = async () => {
        try {
            await axios.post('/api/savings');
            setSuccess('Created an account');
        } catch (error) {
            setError('Failed to create account');
        }
    };

    const deleteAccount = async (savings) => {
        try {
            await axios.delete(`/api/savings/${savings}`)
            setSuccess('Account deleted')
        } catch (error) {
            setError('Failed to create account')
        }
    }

    useEffect(() => {
        const fetchSavings = async () => {
            try {
                const response = await axios.get('/api/savings');
                setSavings(response.data);
                console.log(response.data);
                setError('');
            } catch (error) {
                setError('Failed to fetch savings accounts.');
            }
        };

        fetchSavings();
    }, []);

    const handleAccountClick = async (saving) => {
        try {
            const response = await axios.get(`/api/savings/${saving}`);
            setSelectedSavings(response.data);
            setError('');
        } catch (error) {
            setError('Failed to fetch account details');
        }
    };

    return (
        <>
            <Header title="Savings" />
            <div className="pt-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            Create an savings account{' '}
                            <Button onClick={createAccount}>Create</Button>
                            {error && <p style={{ color: 'red' }}> {error}</p>}
                            {success && (<p style={{ color: 'green' }}>{success}</p>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-1">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            {error && <p>{error}</p>}
                            <ul>
                                {savings.map((saving) => (
                                    <li key={saving.id} onClick={() => handleAccountClick(saving.id)} >
                                        Account number: {saving.account_number}{' '}
                                        Balance: {saving.balance}
                                        {selectedSavings &&
                                            selectedSavings.id == saving.id && (
                                                <div className="rounded-md border border-black p-2">
                                                    <p>Account details</p>
                                                    <p>
                                                        Account Number:{' '} {saving.account_number}
                                                    </p>
                                                    <p>
                                                        Balance:{' '} {saving.balance}
                                                    </p>
                                                    <p>
                                                        {' '} Created:{' '} {saving.created_at}
                                                    </p>
                                                    <input
                                                        type="text"
                                                        placeholder="Amount"
                                                        value={amount}
                                                        onChange={(e) => setAmount(e.target.value,)} />

                                                    <select value={type} onChange={(e) => setType(e.target.value,)} >
                                                        <option value="deposit">
                                                            {' '} Deposit{' '}
                                                        </option>
                                                        <option value="withdraw">
                                                            {' '} Withdrawal{' '}
                                                        </option>
                                                    </select>

                                                    <Button onClick={() => handleTransaction(saving.id,)} >
                                                        Submit
                                                    </Button>
                                                    {error && (<p style={{ color: 'red', }} > {error}
                                                    </p>
                                                    )}
                                                    {success && (<p style={{ color: 'green', }} >
                                                        {' '}
                                                        {success}{' '}
                                                    </p>
                                                    )}
                                                    <RedButton onClick={() => deleteAccount(saving.id)}>Delete account</RedButton>
                                                </div>
                                            )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Save;
