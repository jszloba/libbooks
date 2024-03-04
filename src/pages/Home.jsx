import {Header} from "../components/header/Header.jsx";
import {Brands} from "../components/brands/Brands.jsx";
import {FeaturesBooks} from "../components/featuresbooks/FeaturesBooks.jsx";
import {BestSellingBook} from "../components/bestsellingBook/BestSellingBook.jsx";
import {SuperHits} from "../components/superhits/SuperHits.jsx";
export const Home = () => {

    return (
        <>
            <Header/>
            <FeaturesBooks/>
            <SuperHits/>
            <BestSellingBook/>
            <Brands/>

        </>
    )
}