import React from 'react';
import Image from 'next/image';

interface RoutesLayoutProps {
    children: React.ReactNode;
}

const RoutesLayout: React.FC<RoutesLayoutProps> = ({ children }) => {
    return (
        <main className="w-screen h-screen flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 dark:text-white sm:p-5">
            <div className="bg-white dark:bg-black p-7 sm:rounded-3xl w-screen h-screen sm:w-auto sm:h-auto sm:min-w-[550px]">
                <Image src={'/logo/icon.png'} alt="" width={1000} height={1000} className="w-12 mb-7" />
                {children}
            </div>
        </main>
    );
};

export default RoutesLayout;
