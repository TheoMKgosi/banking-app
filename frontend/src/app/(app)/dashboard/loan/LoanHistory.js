'use client';

import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

const LoanHistory = () => {
    const [loans, setLoans] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSavings = async () => {
            try {
                const response = await axios.get('/api/loans');
                setLoans(response.data);
            } catch (error) {
                setError('Failed to fetch savings accounts.');
            }
        };

        fetchSavings();
    }, []);
    return (
        <div>
            <h2 className="text-lg font-bold">Loan History</h2>
            <table className="border border-slate-300">
                <thead>
                    <tr>
                        <th className="border border-slate-300">
                            Account Number
                        </th>
                        <th className="border border-slate-300">
                            date borrowed
                        </th>
                        <th className="border border-slate-300">Amount </th>
                        <th className="border border-slate-300">Interest </th>
                        <th className="border border-slate-300">date payed</th>
                        <th className="border border-slate-300">Total </th>
                    </tr>
                </thead>
                <tbody>
                    {error && <p>{error}</p>}
                    {loans.map((loan) => (
                        <tr key={loan.id}>
                            <td className="border border-slate-300">
                                {loan.account_number}
                            </td>
                            <td className="border border-slate-300">
                                {loan.created_at}
                            </td>
                            <td className="border border-slate-300">
                                {loan.amount_borrowed}
                            </td>
                            <td className="border border-slate-300">
                                {loan.interest}
                            </td>
                            <td className="border border-slate-300">
                                {loan.date_payed}
                            </td>
                            <td className="border border-slate-300">
                                {loan.total}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LoanHistory;
