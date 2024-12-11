import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const SigninForm = () => {
    return (
        <form action="">
            <Input
                type="email"
                placeholder="Email Id"
                className="rounded !text-lg !py-6 placeholder-black dark:placeholder-gray-400"
                required
            />
            <div className="flex justify-center w-full items-center my-7 gap-3 text-gray-400 dark:text-gray-600">
                <div className="border-b w-full border-gray-400 dark:border-gray-600"></div>
                <div>OR</div>
                <div className="border-b w-full border-gray-400 dark:border-gray-600"></div>
            </div>
            <div className="flex justify-center items-center border rounded h-9 py-6 text-lg gap-3 cursor-pointer">
                <FcGoogle size={24} />
                <span>Continue with Google</span>
            </div>
            <div className="mt-10 flex justify-between items-center">
                <Link 
                    href={'/v1/signup'}
                >
                    Create account
                </Link>
                <div>Next</div>
            </div>
        </form>
    );
};

export default SigninForm;
