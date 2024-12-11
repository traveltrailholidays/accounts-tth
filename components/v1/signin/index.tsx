import MainTitle from '@/components/ui/main-title';
import React from 'react';
import SigninForm from './signin-form';

const SigninPage = () => {
    return (
        <div>
            <MainTitle heading="Sign in" subHeading="Sign in to your Travel Trail Holidays account" />
            <SigninForm />
        </div>
    );
};

export default SigninPage;
