import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our company! We are dedicated to providing the best services to our clients. Our team is made up of experienced professionals who are passionate about what they do.
      </p>
      <p className="mb-4">
        Our mission is to deliver high-quality solutions that meet the needs of our customers. We believe in innovation, excellence, and integrity in everything we do.
      </p>
      <p className="mb-4">
        We started our journey in [Year] and have grown significantly since then. Our success is a testament to the hard work and dedication of our team.
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Our Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Customer Satisfaction</li>
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Excellence</li>
        <li>Teamwork</li>
      </ul>
      <h2 className="text-2xl font-bold mt-6 mb-4">Our Team</h2>
      <p className="mb-4">
        Our team consists of experts in various fields who work together to achieve our goals. We are proud of our diverse and talented workforce.
      </p>
      <p className="mb-4">
        Thank you for taking the time to learn more about us. We look forward to working with you!
      </p>
    </div>
  );
}

export default AboutUs;
