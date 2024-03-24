import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='flex justify-start items-center rounded-bl-3xl w-[100%] h-[70px] bg-slate-500'>
            <div className='ml-10 text-3xl font-sans text-orange-500 w-[90px] h-10'>
                LOGO
            </div>
            <div className='text-orange-500  ml-10 text-2xl font-sans flex justify-around items-center w-[300px] h-10'>
                <NavLink className='hover:text-orange-300 hover:cursor-pointer' to='/easy'>EASY</NavLink>
                <NavLink className='hover:text-orange-300 hover:cursor-pointer' to='/medium'>MEDIUM</NavLink>
                <NavLink className='hover:text-orange-300 hover:cursor-pointer' to='/hard'>HARD</NavLink>
            </div>
        </div>
    );
}

export default Header;
