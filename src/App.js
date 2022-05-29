
import './App.css';
import ContactUsForm from './components/ContactUsForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PreFooter from './components/PreFooter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ContactUsForm/>
      <PreFooter/>
      <Footer/>
      
    </div>
  );
}

export default App;
