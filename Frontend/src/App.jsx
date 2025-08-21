import Navbar from "./assets/LandingPage/NavBar";
import HomePage from "./assets/LandingPage/Home/HomePage"
import Featured from "./assets/LandingPage/Featured/Featured";
import ChooseDoctorSection from "./assets/LandingPage/ChooseDoctor/ChooseDoctorSection";
import JoinCircle from "./assets/LandingPage/JoinCircle/JoinCircle";
import AyurvedicDoctorFeedback from "./assets/LandingPage/AyurvedicDoctorFeedback/AyurvedicDoctorFeedback";
import FAQSection from './assets/LandingPage/FAQSection/FAQSection';
import AppDownloadSection from './assets/LandingPage/AppDownloadSection/AppDownloadSection';
import ConnectSection from './assets/LandingPage/ConnectSection/ConnectSection';
import Footer from './assets/LandingPage/Footer';

function App() {


  return (
    <>
    <Navbar/>
    <HomePage/>
    <Featured/>
    <ChooseDoctorSection/>
    <JoinCircle/>
    <AyurvedicDoctorFeedback/>
    <FAQSection/>
    <AppDownloadSection/>
    <ConnectSection/>
    <Footer/>
    </>
  )
}

export default App
