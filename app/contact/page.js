import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Head from "next/head";
import PortfolioItem from "../components/PortfolioItem";

export default function Contact() {
  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>My Professional Portfolio</title>
        <meta name="description" content="Professional portfolio website showcasing projects and blogs." />
        <meta name="keywords" content="Portfolio, Web Development, APIs, Next.js" />
        <meta name="author" content="Ingrid Canola" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Lato:400,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" defer></script>
      </Head>

      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <Link className="navbar-brand" href="#page-top">
            Final Project
          </Link>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      <div>
      <header className="page-section-heading text-center text-uppercase text-secondary mb-0">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <h1 className="title">Hi, I'm Ingrid Canola</h1>
          <p className="subtitle">
             A Developer passionate about building efficient and scalable solutions.
          </p>
        </div>
      </header>

      <div style={styles.container}>
      <section id="contact" style={styles.section}>
        <div style={styles.content}>
          <h2 style={styles.title}>Contact Me</h2>
          <p style={styles.description}>
            Feel free to reach out to me via email or social media!
          </p>
          <ul style={styles.contactInfo}>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:inginelacanola@gmail.com" style={styles.link}>
                inginelacanola@gmail.com
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/igcanola"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                github.com/igcanola
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ingridcanola/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                linkedin.com/in/ingridcanola
              </a>
            </li>
          </ul>
          <Link href="/" style={styles.backLink}>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
    </div>
    </>
      );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  section: {
    marginTop: "50px",
  },
  content: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#555",
  },
  contactInfo: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
  },
  backLink: {
    display: "inline-block",
    marginTop: "20px",
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
