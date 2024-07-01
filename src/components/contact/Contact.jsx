import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j81j72s", // EmailJS service ID
        "template_4u4ag2f", // EmailJS template ID
        formRef.current,
        "kvLTA8f4wBY4zMSWi" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          toast.success("Message sent successfully!"); // Toast notification on success
          resetForm();
        })
      .catch(
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send message."); // Toast notification on error
        });
  };

  const resetForm = () => {
    formRef.current.reset(); // Reset form fields
    setDone(false); // Reset the "done" state to hide the thank you message
  };

  return (
    <div className="c">
      <ToastContainer /> {/* Toast container for notifications */}
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 6396177058
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              guptavaishi@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              550/94, Mohali, Punjab, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              required // Adding required attribute for validation
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
              required // Adding required attribute for validation
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              required // Adding required attribute for validation
            />
            <button type="submit">Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
