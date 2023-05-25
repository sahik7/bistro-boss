import React from 'react';

const FoodCart = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white w-1/5 text-center py-2 rounded absolute right-6 top-4">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-slate-100 btn-outline mt-5 border-b-4 border-0 hover:bg-slate-800 hover:text-white border-b-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;