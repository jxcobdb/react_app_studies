import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className='py-3 px-3 bg-gradient-to-r from-nav-dark to-nav-light'>
      <ul className='flex flex-rows space-x-3'>
        <li>
          <Link to='/'>
            <Button text='Strona główna' type='button' />
          </Link>
        </li>
        <li>
          <Link to='/Barman'>
            <Button text='Spotkaj Barmana' type='button' />
          </Link>
        </li>
        <li>
          <Link to='/Form'>
            <Button text='Porozmawiaj z barmanem' type='button' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
