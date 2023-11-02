import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Resend } from "resend";
import navIcon1 from "../assets/img/linkedin-svgrepo-com (5).svg";
import navIcon2 from "../assets/img/github-svgrepo-com (2).svg";
import navIcon3 from "../assets/img/instagram-167-svgrepo-com.svg";
import navIcon4 from "../assets/img/email.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
      const data = await resend.emails.send({
        from: "Acme <njrodriguezr22@gmail.com>",
        to: ["norka18@hotmail.com"],
        subject: "Hello World",
        html: "<strong>It works!</strong>",
      });

      console.log(data);
      setButtonText("Send");
      setStatus({ succes: true, message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
    /*let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }*/
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <h2>Get In Touch</h2>
                      <p>Find me on any of the following networks:</p>
                      <div className="social-icon-footer mt-1">
                        <a href="https://www.linkedin.com/in/rnrodriguezr/">
                          <img src={navIcon1} alt="Icon" />
                        </a>
                        <a href="https://github.com/norkadev">
                          <img src={navIcon2} alt="Icon" />
                        </a>
                        <a href="https://instagram.com/norkadev">
                          <img src={navIcon3} alt="Instagram Icon" />
                        </a>
                        <a href="mailto: njrodriguezr22@gmail.com?subject = Contact from website">
                          <img src={navIcon4} alt="Email Icon" />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
