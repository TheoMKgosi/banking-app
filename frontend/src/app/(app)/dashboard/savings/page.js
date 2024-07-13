'use client'
import Header from '@/app/(app)/Header'
import Button from '@/components/Button'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const Page = () => {
    const [savings, setSavings] = useState([])
    const [error, setError] = useState('')

    const createAccount = async () => {
        await axios.post('/api/savings')
    }

    useEffect(() => {
        const fetchSavings = async () => {
            try {
                const response = await axios.get('/api/savings')
                setSavings(response.data)
                console.log(response.data)
                setError('')
            } catch (error) {
                setError('Failed to fetch savings accounts.')
            }
        }

        fetchSavings()
    }, [])

    return (
        <>
            <Header title="Savings" />
            <div className="pt-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Create an savings account{' '}
                            <Button onClick={createAccount}>Create</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {error && <p>{error}</p>}
                            {savings.map((saving) => (
                                <div key={saving.id}>
                                Account number: {saving.account_number} Balance: {saving.balance}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page
