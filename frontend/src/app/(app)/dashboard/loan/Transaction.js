'use client';

import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const response = await axios.get('/api/loans');
                setTransactions(response.data);
                setError('');
            } catch (error) {
                setError('Failed to fetch savings accounts.');
            }
        };

        fetchTransaction();
    }, []);
    return (
        <div>
            <h2 className="text-lg font-bold">Transactions</h2>
            <table className="border border-slate-300 sm:w-[60%]">
                <thead className="bg-slate-200">
                    <tr>
                        <th className="border border-slate-300">
                            Account Number
                        </th>
                        <th className="border border-slate-300">Deposit</th>
                        <th className="border border-slate-300">Date</th>
                        <th className="border border-slate-300">
                            Remaing Balance
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {error}
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td className="border border-slate-300">
                                {transaction.account_number}
                            </td>
                            <td className="border border-slate-300">
                                {transaction.amount}
                            </td>
                            <td className="border border-slate-300">
                                {transaction.created_at}
                            </td>
                            <td className="border border-slate-300">
                                {transaction.remaing_balance}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transaction;
