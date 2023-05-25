import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mb-10'>
            <p className="text-yellow-500 ">--- {subHeading} ---</p>
            <h3 className=" text-4xl uppercase border-y-2 my-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;