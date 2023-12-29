import "./ProductsNavbar.scss";
import zevi_logo from "../../images/ZEVI-GG-LogoDesign.png";
import { BsSearch } from "react-icons/bs";

const ProductsNavbar = () => {
    return (
        <div className='products-navbar'>
            <img src={ zevi_logo } alt="zevi logo " />
            <form className="products-navbar--form">
                <input type='text' placeholder='Search your product...'
                    className='searchbar-input' />
                <button className='search-icon'><BsSearch size="20" /></button>
            </form>
        </div>
    )
}

export default ProductsNavbar
