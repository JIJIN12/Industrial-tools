import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import ShopCategory from '../../pages/ShopCategory';
export default function Nav() {
    const[menu,setMennu] = useState('shop')
    console.log(menu);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src='./images/discount1.jpg ' className='w-[10rem]' />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-menu '>
        <li onClick={()=>{setMennu('shop')}}><Link to={'/'} className='no-underline'>shop</Link>{menu=='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMennu('construction_tool')}}><Link to={'/construction_tool'} className='no-underline'>men</Link>{menu=='construction_tool'?<hr/>:<></>}</li>
        <li onClick={()=>{setMennu('agricultural_tool')}}><Link to={'/agricultural_tool'} className='no-underline'>kids</Link>{menu=='agricultural_tool'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart grid grid-cols-2 gap-5">
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img src='./images/cart.jpg ' className='h-[3rem]'/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
      {/* <ShopCategory props={menu}/> */}
    </div>
    
  )
}
