import Header from '../Header';
import Card from './Card';
import LoanCalculator from './LoanCalculator';
import LoanHistory from './LoanHistory';
import Transaction from './Transaction';

const Loan = () => {
    return (
        <>
            <Header title="Loan" />
            <div className="pt-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <LoanCalculator />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <LoanHistory />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            <Transaction />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loan;
