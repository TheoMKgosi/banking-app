'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import { useState } from 'react';

const ApplyForm = () => {
    {
        /*change to chamelcase*/
    }
    const [amount, set_Amount] = useState('');
    const [months, set_Months] = useState('');
    const [employement, set_Employement] = useState('');
    const [age, set_Age] = useState('');
    const [proof_Of_Residence, set_Residence] = useState('');
    const [income, set_Income] = useState('');

    const submitform = async (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={submitform}>
                {/*amount*/}
                <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                        id="amount"
                        type="number"
                        value={amount}
                        className="mt-1 block w-full sm:w-[50%]"
                        onChange={(event) => set_Amount(event.target.value)}
                        required
                        autoFocus
                    />
                </div>
                {/*months*/}
                <div>
                    <Label htmlFor="months">Months</Label>
                    <Input
                        id="months"
                        type="number"
                        value={months}
                        className="mt-1 block w-full sm:w-[50%]"
                        onChange={(event) => set_Months(event.target.value)}
                        required
                        autoFocus
                    />
                </div>
                {/*employment*/}
                <div>
                    <Label htmlFor="employment">Employment</Label>
                    <Input
                        id="employment"
                        type="text"
                        value={employement}
                        className="mt-1 block w-full sm:w-[50%]"
                        onChange={(event) =>
                            set_Employement(event.target.value)
                        }
                        required
                        autoFocus
                    />
                </div>
                {/*age*/}
                <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                        id="age"
                        type="number"
                        value={age}
                        className="mt-1 block w-full sm:w-[50%]"
                        onChange={(event) => set_Age(event.target.value)}
                        required
                        autoFocus
                    />
                </div>
                {/*proof of residence*/}
                <div>
                    <Label htmlFor="proof_of_residence">
                        Proof of Residence
                    </Label>
                    <Input
                        id="proofOfResidence"
                        type="text"
                        value={proof_Of_Residence}
                        className="mt-1 block w-full sm:w-[50%]"
                        onChange={(event) => set_Residence(event.target.value)}
                        required
                        autoFocus
                    />
                </div>
                {/*income*/}
                <div>
                    <Label htmlFor="income">Income</Label>
                    <Input
                        id="income"
                        type="text"
                        value={income}
                        className="mt-1 block w-full sm:w-[50%]"
                        onChange={(event) => set_Income(event.target.value)}
                        required
                        autoFocus
                    />
                </div>

                <Button className={'mt-2'}>Apply</Button>
            </form>
        </div>
    );
};

export default ApplyForm;
