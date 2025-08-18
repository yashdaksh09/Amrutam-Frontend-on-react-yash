import NavBar from './assets/LandingPage/Navbar';
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
    <NavBar/>
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
