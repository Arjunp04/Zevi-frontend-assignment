import { useState } from "react";
import "./ProductCard.scss";
import { ProductType } from "../../FakerData/FakerData";;
import { ratingBox } from "../../RatingsLogic/RatingsLogic";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface ProductItemType {
  product: ProductType;
}

const ProductCard = ({ product }: ProductItemType) => {

  const [addFavourite , setaddFavourite] = useState(false);
  const [showViewProduct, setShowViewProduct] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="product_item">
    <div className="product_img_container">
      <div className="favourite_icon_container">
        {addFavourite ? (
          <AiFillHeart
            color="red"
            onClick={() => setaddFavourite((prev) => !prev)}
          />
        ) : (
          <AiOutlineHeart
            color="red"
            onClick={() => setaddFavourite((prev) => !prev)}
          />
        )}
      </div>
      <img
        className="product_img"
        src={product.productImg}
        alt="product image"
        onMouseOver={() => setShowViewProduct(true)}
        onMouseOut={() => setShowViewProduct(false)}
      />
      {showViewProduct && (
        <div
          onMouseOver={() => setShowViewProduct(true)}
          onMouseOut={() => setShowViewProduct(false)}
          className="view_product"
          onClick={() => navigate("/")}
        >
          View Product
        </div>
      )}
    </div>
    <div>{product.productName}</div>
    <div>
      <span className="org_price">Rs. {product.productOrgPrice} </span>
      <span className="dis_price">Rs. {product.productDisPrice} </span>
    </div>
    <div className="rating_and_reviews_container">
      {ratingBox(product.productRating)} ({product.productsReviews})
    </div>
  </div>
);
};


export default ProductCard
