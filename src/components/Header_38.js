import './Header_38.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../assets/crown.svg"
import { ReactComponent as ShoppingBag } from "../assets/shopping-bag.svg"

function Header_38() {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo />
            </Link>
            <div className="options">
                <Link to="./shop_38" className="option">Shop</Link>
                <Link to="/contact_38" className="option">Contact</Link>
                <Link to="/signin_38" className="option">Sign In</Link>
                <div className="cart-icon" onclick="cartToggle()">
                    <ShoppingBag />
                </div>
            </div>
        </div>
    )
}

export default Header_38
