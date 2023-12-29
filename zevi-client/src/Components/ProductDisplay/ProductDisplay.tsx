import "./ProductDisplay.scss";
import { ProductType } from "../../FakerData/FakerData";
import ProductCard from "../ProductCard/ProductCard";

interface ProductsInterface {
    products: ProductType[];
}

const ProductDisplay = ( { products }: ProductsInterface ) => {
    return (
        <>
            { products.length <= 0 ? (
                <div className="no_results">No Results Found !!!</div>
            ) : (
                <div className="product_results_container">
                    { products.map( ( product, i ) => {
                        return <ProductCard key={ i } product={ product } />;
                    } ) }
                </div>
            ) }
        </>
    );
};

export default ProductDisplay
