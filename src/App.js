import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import LawyerListing from "./components/LawyerListing/LawyerListing";
import Lawyer from "./components/Lawyer/Lawyer";
import Consult from "./components/Consult/Consult";
import LegalKit from "./components/LegalKit/LegalKit";
import Cart from "./components/Cart/Cart";
import Blog from "./components/Blog/Blog";
import AskForm from "./components/Askform/AskForm";
import BlogDetailPage from "./components/BlogDetailPage/BlogDetailPage"
import { ToastContainer } from "react-toastify";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/askqustion" element={<AskForm />} />
          <Route path="/lawyerlisting" element={<LawyerListing />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/caserequest" element={<Consult />} />
          <Route path="/legalkit" element={<LegalKit />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/ordersuccess" element={<OrderSuccess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<BlogDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
