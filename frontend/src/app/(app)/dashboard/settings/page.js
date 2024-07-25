import Header from '../Header';
import ResetPassword from './ResetPassword';
import UserDetails from './UserDetails';

const Page = () => {
    return (
        <>
            <Header title="Settings" />
            <div className="pt-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <UserDetails />
                            <ResetPassword />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
