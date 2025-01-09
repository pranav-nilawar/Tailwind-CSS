import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mt-50'>
        <Home />
        <AboutUs />
        <Services />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default App;
