// Link
import Link from "next/link";

// stylesheet
import "./globals.css";

import { IoMdArrowDroprightCircle } from "react-icons/io";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div className="home">
      
      <Header />
      

      <section className="hero-container puff-in-center">
        <h2 className="focus-in-expand-fwd">Welcome to</h2>
        <h1 className="bounce-top">
          Digital <span> Dastak</span>
        </h1>
        <p>Your Gateway to the Programming World</p>
      </section>

      
      <section className="third-container slide-in-left">
        <div className="third-blog-cont1">
          <div className="third-b-img"></div>
          <div className="third-b-sp">10 October 2024</div>
          <div className="third-b-head">
            5 Essential Programming Languages for Beginners
          </div>
          <div className="third-b-para">
            Starting your journey into the world of programming can feel
            overwhelming. With so many languages to choose from,its difficult to
            know where to begin.
          </div>
          <div className="third-b-button">
            <button>
            <Link href={"./Blog_one"} className="blog-links">
                    Read More <IoMdArrowDroprightCircle className="blog-icon" />
                  </Link>
            </button>
          </div>
        </div>

        <div className="third-blog-cont2">
          <div className="inner-b-cont">
            <div className="inner-image"></div>
            <div className="inner-text">
              <span className="inner-span">08 October 2024</span>
              <div className="inner-head">
                The Future of AI: What Programmers Need to
              </div>
              <div className="inner-para">
                Explore the impact of artificial intelligence on programming
              </div>
              <div className="inner-button">
                <button>
                  <Link href={"./Blog_two"} className="blog-links">
                    Read More <IoMdArrowDroprightCircle className="blog-icon" />
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="inner-b-cont">
            <div className="inner-image2"></div>
            <div className="inner-text">
              <span className="inner-span">05 October 2024</span>
              <div className="inner-head">
                5 Must-Know Algorithms in Machine Learning
              </div>
              <div className="inner-para">
                Uncover the most important machine learning algorithms
              </div>
              <div className="inner-button">
                <button>
                  <Link href={"./Blog_three"} className="blog-links">
                    Read More <IoMdArrowDroprightCircle className="blog-icon" />
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="inner-b-cont">
            <div className="inner-image4"></div>
            <div className="inner-text">
              <span className="inner-span">29 September 2024</span>
              <div className="inner-head">
                Creating Your First Web Application: A short Guide
              </div>
              <div className="inner-para">
                A comprehensive guide to building your first web app, from idea
                to deployment.
              </div>
              <div className="inner-button">
                <button>
                  <Link href={"./Blog_four"} className="blog-links" >
                    Read More <IoMdArrowDroprightCircle className="blog-icon" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="news-text">
          <h1>Subscribe to Our Newsletter:</h1>
          <p>
            Stay updated with the latest in programming and IT. Enter your email
            below.
          </p>
        </div>
        <div className="news-btn">
          <input
            type="text"
            className="news-input"
            placeholder="Enter your email"
          />
          <button>    
              Read More <IoMdArrowDroprightCircle />
          </button>
        </div>
      </section>

      <footer className="slide-in-bottom">
        <div className="top-footer-cont">
          <div className="columns">
            <span className="Heading">Contact</span>
            <span>digitaldastak@gmail.com</span>
            <span>+201 40570 788</span>
            <span>Address: example road, 123 street, Karachi.</span>
          </div>

          <div className="columns">
            <span className="Heading">Digital Dastak</span>
            <span>Our Story</span>
            <span>Team</span>
            <span>Careers</span>
            <span>Blog</span>
          </div>

          <div className="columns">
            <span className="Heading">Support</span>
            <span>Help Center</span>
            <span>FAQs</span>
            <span>Privacy Policy</span>
            <span>Terms of Services</span>
          </div>

          <div className="columns">
            <span className="Heading">Follow Us</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>

        <div className="line"></div>

        <div className="bottom-footer-cont">
          2024 Digital Dastak. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
