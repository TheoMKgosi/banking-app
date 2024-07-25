const RedButton = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center rounded-md border border-transparent bg-red-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white ring-red-300 transition duration-150 ease-in-out hover:bg-red-700 focus:border-red-900 focus:outline-none focus:ring active:bg-red-900 disabled:opacity-25`}
        {...props}
    />
);

export default RedButton;
