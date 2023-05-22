import React from 'react';
import ChefServiceImg from "../../../assets/home/chef-service.jpg"

const ChefService = () => {
    return (
        <div className={`bg-[url("https://i.ibb.co/4dq3ngd/chef-service.jpg")]  h-96 flex bg-center justify-center items-center bg-cover`}>
            <div className="bg-white py-16 w-5/6 text-center">
                <h1 className="text-3xl uppercase">bistro Boss</h1>
                <p className="text-gray-600 mt-5 w-2/3 mx-auto">"Bistro Boss" is a contemporary and inviting restaurant that combines the charm of a traditional bistro with a modern twist. Our restaurant offers a relaxed and cozy atmosphere where guests can savor delicious and artfully crafted dishes.</p>
            </div>
        </div>
    );
};

export default ChefService;