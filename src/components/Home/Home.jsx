import Navbar from "./Navbar/Navbar";
import PageName from "./PageName/PageName";
import NewCollections from "./NewCollections/NewCollections";
import NewLetter from "./NewLetter/NewLetter";
import Footer from "../Footer/Footer";
const Home=()=>{
    return(
        <>
        <Navbar></Navbar>
        <PageName></PageName>
        <NewCollections></NewCollections>
        <NewLetter></NewLetter>
        <Footer></Footer>
        </>
    )
}
export default Home;