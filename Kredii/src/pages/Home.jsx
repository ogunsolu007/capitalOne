











import { useState } from "react";
import Navbar from "../component/Navbar";
import "./Home.css";
import Modal from "react-modal";
// import newRequest from "../utils/newRequest";
import axios from "axios"; // Import Axios library

Modal.setAppElement("#root");

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    quantity: "",
    numTransactions: "", // Include numTransactions in state
    liveBalance: "", // Include liveBalance in state
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE2OTYwMzIwMDAsImFwaV9zdWIiOiJhN2Q2NGUyOGM0MWNkNmY3MDYxYTBkZmUzMjNhYzc0YjM5MWY1YzQ4YWI5ZDVhNTJiYWI0MjUyNzNmYTM2NDk4MTcxNzIwMDAwMDAwMCIsInBsYyI6IjVkY2VjNzRhZTk3NzAxMGUwM2FkNjQ5NSIsImV4cCI6MTcxNzIwMDAwMCwiZGV2ZWxvcGVyX2lkIjoiYTdkNjRlMjhjNDFjZDZmNzA2MWEwZGZlMzIzYWM3NGIzOTFmNWM0OGFiOWQ1YTUyYmFiNDI1MjczZmEzNjQ5OCJ9.QhY-VyZGoZF__YuwWrXaTnradHZ4Z-0HI79steM00qLRZ-_wXwrkhfsD-ZAkCT9cNwlQ5RPXwte87CC6kVoPqftMV0_DukkxhztQlco80sYOgxD7G_GdqDfHeaURT3CbidgiZKfaBF25ioHWGJe-0EkJ4j63_rP2SDnnTBjhCgFBMje8ZfBKS8vTtvdcA2Du6b8FKbfGlyAbsy-e6rQJhv4jz7CyZvnh4iK25suRjqyoGKNUM_NRN7gMjVtGEVSzJzcXfTEwE_-tRRWVHVIfJGUrZJVsH39ba9CWapyZGGjpBMIJSrpL_uFptZFNU9EWDb2vMBCFjRkJzkcUr7ffWA"; // Replace with your actual authorization token

      // Make the POST request to create the account with form data
      const response = await axios.post(
        "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            version: 1.0,
          },
        }
      );

      console.log("Account Created:", response.data.Accounts);
    } catch (error) {
      console.error("Error:", error);
    }

    closeModal();
  };

  return (
    <>
      <Navbar />
      <div className="home-section">
        <div className="home-content">
          <img src="/kredii.png" alt="kredii" className="home-img" />
          <h2>Your credit score is your financial passport.</h2>
          <p>
            Think of your credit score as your passport to financial success. It
            opens doors to credit, loans, and opportunities for growth. It's
            more than just a number; it's a symbol of your financial
            trustworthiness. To unlock these opportunities and secure a brighter
            financial future, all you need to do is check your credit score.
            Take action today and discover how your financial passport can help
            you achieve your goals.
          </p>
        </div>
      </div>

      <div>
        <button onClick={openModal}>Create Account</button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Create Account Form"
        >
          <h2>Create Account</h2>
          <form>
            <div>
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="numTransactions">Num Transactions: </label>
              <input
                type="number"
                name="numTransactions"
                value={formData.numTransactions}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="liveBalance">Live Balance: </label>
              <input
                type="checkbox"
                name="liveBalance"
                checked={formData.liveBalance === true}
                onChange={() =>
                  handleInputChange({
                    target: {
                      name: "liveBalance",
                      value: !formData.liveBalance,
                    },
                  })
                }
              />
            </div>

            <button onClick={handleCreateAccount}>Create Account</button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Home;
