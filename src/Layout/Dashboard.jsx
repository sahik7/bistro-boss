import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on data;
  const isAdmin = true;
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">

            {
              isAdmin ? <>
                <li><NavLink to="/"><FaHome /> Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/reservations"><FaUtensils /> Add Items</NavLink></li>
                <li><NavLink to="/dashboard/history"><FaWallet /> Manage Items</NavLink></li>
                <li><NavLink to="/dashboard/history"><FaBook /> Manage bookings</NavLink></li>
                <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>
              </> : <>
                <li><NavLink to="/"><FaHome /> User Home</NavLink></li>
                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt /> Reservations</NavLink></li>
                <li><NavLink to="/dashboard/history"><FaWallet /> Payment History</NavLink></li>
                <li className="flex">
                  <NavLink to="/dashboard/mycart"><FaShoppingCart /> My Cart
                    <span className="badge  badge-secondary">+{cart.length}</span>
                  </NavLink>

                </li>
              </>
            }


            <div className="divider bg-slate-300 h-[1px]"></div>
            <li><NavLink to="/"><FaHome />Home</NavLink></li>
            <li><NavLink to="/menu"><FaHome />Our Menu</NavLink></li>
            <li><NavLink to="/order/salad">Order Food</NavLink></li>
            <li><NavLink to="/"><FaHome /></NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;