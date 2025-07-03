import Navbar from "./navbar";
import PageName from "./pagename";
import NewCollections from "./NewCollections";
import NewsLetter from "./Newsletter";
import Footer from "./footer";
const Home=()=>{
    return(
        <>
        <PageName></PageName>
        <NewCollections></NewCollections>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
        </>
    )
}
export default Home;