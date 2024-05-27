import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "082efa46-65c6-4478-bd0b-a4cea15f526f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          "Got something to say? We're all ears! Shoot us a message via the
          contact form or hit us up using the details below. We thrive on your
          feedback, questions, and suggestions – they're the fuel that drives us
          to deliver top-notch service to our university fam. So don't hold
          back, let us know what's on your mind!"
        </p>
        <ul>
          <li> <img src={mail_icon} alt="" />Contact@edusity.dev</li>
          <li> <img src={phone_icon} alt="" />+1 123-654-0987</li>
          <li> <img src={location_icon} alt="" />
            1600 Amphitheatre Parkway, Mountain View
            <br />
            CA 94043, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder="Enter you name" required/>

            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number"/>

            <label>Write Your Message Here</label>
            <textarea name="message"  rows='6' placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
