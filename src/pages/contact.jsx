import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Make a POST request to Formspree with the form data
      const response = await axios.post(
        "https://formspree.io/f/mzbllprk",
        values
      );

      // Optionally, you can handle the response or display a success message to the user
      console.log("Formspree response:", response);

      // Display a success message to the user
      message.success("Form submitted successfully!");

      // Reset the form after successful submission
      form.resetFields();
    } catch (error) {
      // Handle errors, and optionally display an error message to the user
      console.error("Form submission error:", error);
      message.error("Form submission failed. Please try again later.");
    }
  };

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Let's Get in Touch: Ways to Connect with Me
            </div>
          </div>

          <div
            style={{
              background: "#EEF5FF",
              borderRadius: "20px",
              boxShadow: "#9EB8D9 5px 5px 5px",
              marginTop: "20px",
              padding: "20px",
            }}
          >
            <center>
              <div>
                <strong>
                  <h1>Contact Me</h1>
                </strong>
              </div>
              <Form
                form={form}
                name="contact-form"
                onFinish={onFinish}
                layout="vertical"
                style={{ height: "50%", width: "50%", padding: "10px" }}
              >
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email address",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </center>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
