
//TODO: use an endpoint for current loan
const Card = () => {
    return (
        <div>
            <h2 className="text-lg font-bold">Current Loan</h2>
            <div className="w-[50%] rounded border bg-gray-200">
                <p className="p-2">Account Number: LO123974 </p>
                <p className="p-2">Total Amount: P50000</p>
                <p className="p-2">Monthly pay: P400</p>
                <p className="p-2">Expected to be done: 20/05/2026</p>
                <p className="p-2"> interest: 5%</p>
            </div>
        </div>
    );
};

export default Card;
