import Hero from "../components/hero/hero";
import AboutUs from "../components/about/about";
import OurPackages from "../components/packagess/package";
import Destinations from "../components/destinations/destinations";
import Services from "../components/servicess/services";
import Gallery from "../components/gallery/gallery";
import ContactUs from "../components/contact/contactUs";

function Home() {
    return(
        <>
            <Hero/>
            <AboutUs/>
            <OurPackages/>
            <Destinations/>
            <Services/>
            <Gallery/>
            <ContactUs/>
        </>
    )
}

export default Home;