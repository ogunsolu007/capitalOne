import Navbar from "../component/Navbar";
import "./Home.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-section">

        <div className="home-content">
          <img src="/kredii.png" alt="kredii" className="home-img" />

          <div className="content-sider">
            <h2>Your credit score is your financial passport.</h2>
            <p className="header-paragraph">
              Think of your credit score as your passport to financial success. It
              opens doors to credit, loans, and opportunities for growth. It's more
              than just a number; it's a symbol of your financial trustworthiness.
              To unlock these opportunities and secure a brighter financial future,
              all you need to do is check your credit score. Take action today and
              discover how your financial passport can help you achieve your goals.
            </p>
          </div>
          
        </div>
      
      </div>
    </>
  );
};
export default Home;
