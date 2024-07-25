import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
//import { useAuth } from "@/hooks/auth"

const ResetPassword = () => {
    // const { reset} = useAuth()
    return (
        <div className="py-3">
            <h2 className="text-xl">Reset Password</h2>
            <div className="p-2">
                <form>
                    <Label>Password</Label>
                    <Input className={'block p-2'} />
                    <Button>Reset Password</Button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
