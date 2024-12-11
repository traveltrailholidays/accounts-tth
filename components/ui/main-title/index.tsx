import React from 'react';

interface MainTitleProps {
    heading: string;
    subHeading?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ heading, subHeading }) => {
    return (
        <div>
            <div className='text-4xl'>{heading}</div>
            <div className='text-lg mt-4 mb-10 font-thin'>
                {subHeading}
            </div>
        </div>
    );
};

export default MainTitle;
