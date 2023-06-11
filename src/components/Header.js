 import {NavLink, Link} from 'react-router-dom';
 import Logo from '../assets/homelogo.png';
import { useSelector } from 'react-redux';
 
 export const Header = () => {
  const cartLength = useSelector(state => state.cartState.cartList.length);
  return (
    <header className='container'>
        <div className="brand-container">
         <Link to='/'><img src={Logo} alt="hompage-logo" /></Link>
         <Link to='/'><span>Redux Cart</span></Link>
        </div>

        <nav className="nav">
          <p ><NavLink to='/' end>Home</NavLink></p>
          <p><NavLink to='/cart'>Cart</NavLink></p>
        </nav>

        <div className="cart-count">
           <NavLink to='/cart'><p>In Cart {cartLength}</p></NavLink>
        </div>
    </header>
  )
}
