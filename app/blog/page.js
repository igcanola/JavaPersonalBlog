"use client";

import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    description:
      "Explore the advancements in AI, including GPT models, autonomous systems, and ethical considerations.",
    image: "/image/ai_future.jpg",
    content: `
      Artificial Intelligence (AI) is revolutionizing industries worldwide. 
      From natural language processing (like GPT models) to autonomous systems, AI has become a critical driver of innovation.
      Key areas of growth include healthcare, autonomous vehicles, and personalized experiences in retail.
    `,
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your actual video link
  },
  {
    id: 2,
    title: "Top 5 Programming Languages in 2024",
    description:
      "A detailed analysis of the most popular programming languages and why they matter in the tech world.",
    image: "/image/programming_languages.jpg",
    content: `
      In 2024, programming continues to evolve, with languages like Python, JavaScript, and Rust leading the way. 
      Developers favor Python for data science and AI, while Rust excels in system programming. Learn what makes them unique.
    `,
    video: "https://www.youtube.com/watch?v=Yrw1rb1ABLQ",
  },
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

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
      
      <header className="page-section-heading text-center text-uppercase text-secondary mb-0">
      <div style={styles.container}>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h1 style={styles.title}>Technology Blog</h1>
      <br></br>
      <div style={styles.articles}>
        {articles.map((article) => (
          <div
            key={article.id}
            style={styles.card}
            onClick={() => setSelectedArticle(article)}
          >
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={250}
              style={styles.image}
            />
        
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedArticle(null)}
            >
              Close
            </button>
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.content}</p>
            {selectedArticle.video && (
              <iframe
                width="560"
                height="315"
                src={selectedArticle.video}
                title={selectedArticle.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
      <p></p>
      <Link href="/" style={styles.backLink}>
            Back to Home
          </Link>
    </div>
      </header>    
    </>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  articles: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  image: {
    borderRadius: "10px",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "700px",
    width: "100%",
  },
  closeButton: {
    backgroundColor: "#ff5252",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    float: "right",
  },
  backLink: {
    display: "inline-block",
    marginTop: "20px",
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
