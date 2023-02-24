import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const Error = () => {
  const { errorCode } = useParams();
  return (
    <div className="home">
      <NavBar />
      <div className="error">
        <h1>Something went wrong!</h1>
        {errorCode && <h1>{`Error code: ${errorCode}`}</h1>}
      </div>
      <Footer />
    </div>
  );
};
export default Error;
