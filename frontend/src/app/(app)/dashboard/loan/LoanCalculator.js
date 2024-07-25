'use client';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { useState } from 'react';

const LoanCalculator = () => {
    const [amount, setAmount] = useState(0);
    const [term, setTerm] = useState(0);
    const [result, setResult] = useState(0);
    const [error, setError] = useState('')

    const handleTermChange = (e) => {
        setTerm(e.target.value);
        calculateResult();
    };
    const handleAmountChange = (e) => {
        setAmount(e.target.value);

        calculateResult();
    };
    const calculateResult = () => {
        try {
            let pay = amount / term;
            setResult(pay);
        } catch (error) {
            setError('Could not calculate monthly pay');
        }
    };
    return (
        <div>
            <h2>Loan Calculator</h2>
            <div>
                <Label>Amount</Label>
                <Input
                    type="number"
                    value={amount}
                    min="0"
                    max="100000000"
                    onChange={handleAmountChange}
                    id="amount"
                />
                <Label>term</Label>
                <Input
                    type="range"
                    value={term}
                    id="term"
                    min="0"
                    onChange={handleTermChange}
                    max="12"
                />{' '}
                {error}
                <p>Monthly pay: {result}</p>
            </div>
        </div>
    );
};

export default LoanCalculator;
