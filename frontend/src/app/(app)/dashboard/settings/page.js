'use client'
import { useAuth } from "@/hooks/auth"
import Header from "../../Header"

const Page = () => {
    const { user } = useAuth()
    return (
        <>
            <Header title="Settings" />
            <div className="pt-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        Settings page {user?.name}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
