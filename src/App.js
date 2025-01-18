import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const options = [25, 100, 250, 500];

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [promoCode,setPromoCode] = useState("")
  const [isMobile,setIsMobile] = useState(false)

  const updateHeaderText = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    }
  };
  useEffect(() => {
    updateHeaderText();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowSecondInput(true);
  };

  return (
    <>
   {!isMobile && <div className="header"/>}
    <div className="flex-box">
      <div className="flex-end">{"Skip ->"}</div>
      <div className="text-container">
     {isMobile ?  <h1 className="header-text">
        Claim your <span className="highlight-text">welcome bonus</span> and get
        in the action!
      </h1> : <h1 className="highlight-text">
        Claim your bonus and start drafting!</h1>}
        </div>
      <div className="customize-input-box">
        <label>Promo Code:</label>
        <div className="input-wrapper">
          <input
            className="cusomize-input"
            value={promoCode}
            onChange={(event)=>setPromoCode(event.target.value)}
          />
          <span className="check-icon">✔</span>
        </div>
        {showSecondInput && (
          <div className="customize-input-box input-wrapper">
            <label>Deposit Amount:</label>
            <input
              className="cusomize-input"
              value={selectedOption ? `$${selectedOption}` : ""}
              readOnly
            />
          </div>
        )}
        <div className="button-container">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`option-button ${
                selectedOption === option ? "active" : ""
              }`}
            >
              {`$${option}`}
            </button>
          ))}
        </div>
      </div>
      <div className="payment-buttons">
        <button className="payment-button">
          <img
            src="https://www.nopcommerce.com/images/thumbs/0014294_paypal-express-payment-plugin.png"
            alt="PayPal"
            className="payment-icon"
          />
          PayPal
        </button>
        <button className="payment-button">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1iOGSgV_tPUVI_A0Wri3yFisNT4nZuAr7A&s"
            alt="Apple Pay"
            className="payment-icon"
          />
          Pay
        </button>
        <button className="payment-button">
          Credit Card
        </button>
      </div>
    {!isMobile ? <div className="footer-ui">
    {"Skip and Go To Lobby >>"}
    </div>
   : <div className="footer">
    {"Skip and Go To Lobby >>"}
      </div>}
    </div>
    </>
  );
}

export default App;
