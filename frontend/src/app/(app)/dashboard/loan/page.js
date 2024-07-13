'use client'
import Header from '@/app/(app)/Header'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import { useEffect, useState } from 'react'

const Loan = () => {
    {/*change to chamelcase*/}
    const [amount, set_Amount] = useState('')
    const [months, set_Months] = useState('')
    const [employement, set_Employement] = useState('')
    const [age, set_Age] = useState('')
    const [proof_Of_Residence, set_Residence] = useState('')
    const [income, set_Income] = useState('')

    const submitform = async event => {
        event.preventDefault()
    }
    return (
        <>
            <Header title="Loan" />
            <div className="pt-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submitform}>
                                {/*amount*/}
                                <div>
                                    <Label htmlFor="amount">Amount</Label>
                                    <Input
                                        id="amount"
                                        type="number"
                                        value={amount}
                                        className="block mt-1 w-full sm:w-[50%]"
                                        onChange={event =>
                                            set_Amount(event.target.value)
                                        }
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
                                        className="block mt-1 w-full sm:w-[50%]"
                                        onChange={event =>
                                            set_Months(event.target.value)
                                        }
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
                                        className="block mt-1 w-full sm:w-[50%]"
                                        onChange={event =>
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
                                        className="block mt-1 w-full sm:w-[50%]"
                                        onChange={event =>
                                            set_Age(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>
                                {/*proof of residence*/}
                                <div>
                                    <Label htmlFor="proof_of_residence">Proof of Residence</Label>
                                    <Input
                                        id="proofOfResidence"
                                        type="text"
                                        value={proof_Of_Residence}
                                        className="block mt-1 w-full sm:w-[50%]"
                                        onChange={event =>
                                            set_Residence(event.target.value)
                                        }
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
                                        className="block mt-1 w-full sm:w-[50%]"
                                        onChange={event =>
                                            set_Income(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </div>

                                <Button className={'mt-2'}>Apply</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You do not have loans
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loan
