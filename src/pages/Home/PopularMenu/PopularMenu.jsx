import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <section className="mb-12">
            <SectionTitle heading="from our menu" subHeading="popular items"/>
        <div className="grid md:grid-cols-2 gap-10">
            {
                popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <div className="w-full text-center">
        <button className="btn btn-outline border-0 mt-5 border-b-4">View Full Menu</button>
        </div>
        </section>
    );
};

export default PopularMenu;