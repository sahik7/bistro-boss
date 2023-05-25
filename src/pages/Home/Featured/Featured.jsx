import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className=" bg-[url('https://i.ibb.co/zX6jz0W/featured.jpg')] bg-cover bg-center text-white bg-fixed">
            <div className="bg-black/70 py-20  px-16">
            <SectionTitle subHeading="check it out" heading="featured item"/>
            <div className="md:flex justify-center  items-center space-x-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2019</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, adipisci placeat. Laborum pariatur vitae officia unde quasi fugit. Qui assumenda similique incidunt eos voluptatibus nam excepturi sequi, quibusdam, porro minima, quam numquam. Numquam assumenda illum, nesciunt similique expedita, amet eum nulla, mollitia asperiores fugit optio qui sit quia tenetur sapiente.</p>
                    <button className="btn btn-outline mt-5 border-b-4">Order Now</button>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Featured;