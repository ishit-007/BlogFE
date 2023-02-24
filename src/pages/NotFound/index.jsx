import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="error">
        <h1>Page not found!</h1>
      </div>
      <Footer />
    </div>
  );
};


export default NotFound;
