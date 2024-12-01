import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Head from "next/head";
import PortfolioItem from "../components/PortfolioItem";

export default function About() {
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

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
          Enthusiastic and passionate about technology, over 10 years of progressive experience as a Software Developer. Solid C# development experience across Lifecycle stages including coding standards, code reviews, source control management, build processes, testing, and operations. 
          Strong understanding of Object-Oriented Design using Design Patterns. Timeline / Goal–Oriented, flexible, and very hardworking team player. Fast learner and able to effectively self-manage during projects. 
          I am seeking exciting opportunities as a Software Developer in a fast-paced organization to utilize my expertise for the firm's growth.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <PortfolioItem
              title="App Rutero"
              description="Mobile application for tracking orders"
              image="/image/project1.png"
            />
            <PortfolioItem
              title="Coactiva-System "
              description="Application in VB .NET with SQL Server database, to register, monitor and validate the cases of coactiva of the Ecuadorian social security"
              image="/image/project2.png"
            />
             <PortfolioItem
              title="PhpAssignments"
              description="PHP projects"
              image="/image/project3.png"
            />
          </div>
        </div>
      </section>
      <p></p>
      <Link href="/">
            Back to Home
          </Link>
    </div>

    
    </>
      );
}
