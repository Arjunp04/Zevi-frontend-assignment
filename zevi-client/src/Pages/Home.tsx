import { useState } from "react";
import home_bg from "../images/home_bg.png";
import "./Home.scss";
import Logo from "../Components/Logo/Logo";
import { BsSearch } from "react-icons/bs";
import { LatestTrendType, SuggestionType, fetchSuggestionData, fetchLatestTrendData } from "../FakerData/FakerData.tsx";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const [ showSuggestionBox, setShowSuggestionBox ] = useState( false );
    const [ latestTrendsData, setLatestTrendsData ] = useState<LatestTrendType[]>();
    const [ suggestionData, setSuggestionData ] = useState<SuggestionType[]>();

    const navigate = useNavigate();

    const getBoxProducts = () => {
        setShowSuggestionBox( ( prev ) => !prev );
        setLatestTrendsData( fetchLatestTrendData() );
        setSuggestionData( fetchSuggestionData() );
    };

    const onSubmitHandler = ( e: any ) => {
        e.preventDefault();
        navigate( "/products" );
    };

    const navigateToProductsPage = () => {
        navigate( "/products" );
    };

    return (
        <div className="home_bgimage"
            style={ { backgroundImage: `url(${home_bg})` } }>
            <Logo />
            <div className="home_content">
                <form className="products-navbar--form" onSubmit={ ( e ) => onSubmitHandler( e ) }>
                    <input
                        onClick={ () => getBoxProducts() }
                        type="text"
                        className="searchbar-input"
                        placeholder="Search..."
                    />
                    <button className="search_icon">
                        <BsSearch size="20" />
                    </button>
                </form>
                { showSuggestionBox && (
                    <div className="latest_trend_and_suggestion_box">
                        <div className="latest_trend_box">
                            <div className="category_title">Latest Trends</div>
                            <div className="latest_trend_products">
                                { latestTrendsData?.map( ( product, i ) => {
                                    return (
                                        <div
                                            key={ i }
                                            className="latest_trend_product"
                                            onClick={ navigateToProductsPage }
                                        >
                                            <img src={ product.productImg } alt="" />
                                            <div>{ product.productName }</div>
                                        </div>
                                    );
                                } ) }
                            </div>
                        </div>
                        <div>
                            <div className="category_title">Popular Suggestion</div>
                            <div>
                                { suggestionData?.map( ( product, i ) => {
                                    return (
                                        <div
                                            key={ i }
                                            className="suggestion_product"
                                            onClick={ navigateToProductsPage }
                                        >
                                            { product.productName }
                                        </div>
                                    );
                                } ) }
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Home
