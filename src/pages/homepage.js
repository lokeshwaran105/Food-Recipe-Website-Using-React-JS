import Hero from "../components/common/hero";
import FeaturedRecipe from "../components/common/featured";
import SearchBar from "../components/search/searchbar";
import Cuisine from "../components/common/cuisines";

const Homepage = () => {
    return(
        <>
            <Hero />
            <SearchBar />
            <FeaturedRecipe />
            <Cuisine />
        </>
    )
}

export default Homepage;