import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Booking from './pages/Booking.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import BookingForm from './components/BookingForm..jsx';
import SelectCar from './components/SelectCar.jsx';
import ConfirmBooking from './components/ConfirmBooking.jsx';
import Confirmation from './components/Confirmation.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking-details" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/" element={<BookingForm />} />
            <Route path="/select-car" element={<SelectCar />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />



          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
