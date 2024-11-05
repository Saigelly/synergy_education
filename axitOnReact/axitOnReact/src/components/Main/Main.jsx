import Advantages from "../Advantages/Advantages";
import Banner from "../Banner/Banner";
import Contacts from "../Contacts/Contacts";
import PriceSection from "../PriceSection/PriceSection";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import SocialSection from "../SocialSection/SocialSection";
import TabSection from "../TabSection/TabSection";
import TopSection from "../TopSection/TopSection";


const Main = () => {
    return (
        <main className="main">
            <TopSection />
            <SocialSection />
            <TabSection />
            <Advantages />
            <PriceSection />
            <ReviewsSection />
            <Banner />
            <Contacts />
        </main>
    )
}
export default Main;