import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImage from "../../assets/menu/banner3.jpg"
import dessertImage from "../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../assets/menu/pizza-bg.jpg"
import saladImage from "../../assets/menu/salad-bg.jpg"
import soupImage from "../../assets/menu/soup-bg.jpg"
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>
            <Cover img={menuImage} title="our menu"/>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Todays Offer"></SectionTitle>
            {/* Offered Menu Items */}
            <MenuCategory items={offered}/>
            {/* Desert Menu items */}
            <MenuCategory items={dessert} title="dessert" coverImg={dessertImage}/>
            {/* Pizza Menu items */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImage}/>
            {/* Salad Menu items */}
            <MenuCategory items={salad} title="salad" coverImg={saladImage}/>
            {/* Soup Menu items */}
            <MenuCategory items={soup} title="soup" coverImg={soupImage}/>

        </div>
    );
};

export default Menu;