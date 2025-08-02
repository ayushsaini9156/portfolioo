import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_7lhntjl", // Replace with your actual service ID
        "template_ztowl3b", // Replace with your actual template ID
        formRef.current,
        "zvPEW8dEvKGI5jNfl" // Replace with your actual public key
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Message sent successfully!");
        setStatus("success");
        resetForm();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message.");
        setStatus("error");
      });
  };

  const resetForm = () => {
    formRef.current.reset();
    setTimeout(() => setStatus("idle"), 4000); // Reset icon after a delay
  };

  return (
    <div className="c">
      <ToastContainer />
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9193459156
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              ayushsaini16703@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Crossing Republik, Ghaziabad, 201016
            </div>
          </div>
        </div>

        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
              disabled={status === "loading"}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              disabled={status === "loading"}
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
              required
              disabled={status === "loading"}
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              required
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                backgroundColor: status === "loading" ? "#888" : "#4CAF50",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>

            <div style={{ marginTop: "10px", height: "30px" }}>
              {status === "loading" && (
                <FaSpinner
                  style={{
                    color: "#888",
                    animation: "spin 1s linear infinite",
                  }}
                />
              )}
              {status === "success" && (
                <FaCheckCircle
                  style={{
                    color: "green",
                    fontSize: "1.5rem",
                    transition: "opacity 0.3s ease",
                  }}
                />
              )}
              {status === "error" && (
                <FaTimesCircle
                  style={{
                    color: "red",
                    fontSize: "1.5rem",
                    transition: "opacity 0.3s ease",
                  }}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
