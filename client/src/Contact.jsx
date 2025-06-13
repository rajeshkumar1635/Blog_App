import React from 'react';

function Contact() {
  return (
    <div className="contact-container" style={{ maxWidth: 500, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? Reach out to us!
      </p>
      <form>
        <div style={{ marginBottom: 16 }}>
          <label>Name:</label>
          <input type="text" className="form-control" placeholder="Your Name" style={{ width: "100%" }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Your Email" style={{ width: "100%" }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Message:</label>
          <textarea className="form-control" placeholder="Your Message" rows={4} style={{ width: "100%" }} />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      <hr style={{ margin: "24px 0" }} />
      <div>
  <h4>Connect with me:</h4>
  <a
    href="https://github.com/rajeshkumar1635"
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginRight: 16, display: "inline-flex", alignItems: "center" }}
  >
    <i className="fab fa-github" style={{ marginRight: 8 }}></i>
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/rajesh-kumar-kurapati-040a29183/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-flex", alignItems: "center" }}
  >
    <i className="fab fa-linkedin" style={{ marginRight: 8, color: "#0077b5" }}></i>
    LinkedIn
  </a>
</div>
    </div>
  );
}

export default Contact;