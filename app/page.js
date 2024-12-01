import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/styles.css";

export default function Home() {
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
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <Link className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <Image
            src="/image/me.png"
            alt="me"
            width={700}
            height={500}
          />
          <br></br>
          <h1 className="masthead-heading text-uppercase mb-0">Welcome to My World</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">Software Engineer | .NET/C# Developer | Full Stack Developer</p>
        </div>
      </header>

      <section className="page-section portfolio" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About Me</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {/* Replace the placeholders with your actual portfolio items */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Link href="./about">
                <Image
                    src="/image/PIC.jfif"
                    alt="me"
                    width={300}
                    height={200}
                    />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-primary text-white mb-0" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">Portfolio</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="lead text-center">Exchange Rate - Exercises</p>
          <div className="row justify-content-center">
            {/* Replace the placeholders with your actual portfolio items */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Link href="./portfolio">
                <Image
                    src="/image/cabin.png"
                    alt="me"
                    width={300}
                    height={200}
                    />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Blog</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
              <div className="portfolio-item mx-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Link href="./blog">
                <Image
                    src="/image/blog.png"
                    alt="me"
                    width={300}
                    height={200}
                    />
              </Link>
              </div>

        </div>
      </section>

      <section className="page-section bg-primary text-white mb-0" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">Contact Me</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {/* Replace the placeholders with your actual portfolio items */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Link href="./contact">
                <Image
                    src="/image/contact.png"
                    alt="me"
                    width={300}
                    height={200}
                    />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
