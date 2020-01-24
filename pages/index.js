import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Card from "../components/card";
import Typewriter from "typewriter-effect";
import projects from "../public/projects";

const Home = () => (
  <div>
    <div className="container">
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>

      <Head>
        <title>Davut's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Nav /> */}
      {/* <div className="view"></div> */}
      <div className="hero">
        <h1 className="title">Davut Dev</h1>
        <div className="subtitle">
          <Typewriter
            style={pStyle}
            options={{
              strings: [
                "Software <strong>Developer<strong>",
                "Music <strong>Producer<strong>"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <div className="social-media">
          <a href="https://www.twitter.com/lovelyDeveloper">
            <ion-icon size="large" name="logo-twitter"></ion-icon>
          </a>
          <a href="https://www.github.com/davutj">
            <ion-icon size="large" name="logo-github"></ion-icon>
          </a>
        </div>
        <h2>Side Projects</h2>
        <div className="cards">
          {projects.sideProjects.map(
            ({ id, title, image, platformImg, desc, devices }) => (
              <Card
                key={id}
                img={image}
                title={title}
                platformImg={platformImg}
                desc={desc}
                devices={devices}
              ></Card>
            )
          )}
        </div>
        <h2>Work Projects</h2>
        <div className="cards">
          {projects.workProjects.map(
            ({ id, title, image, platformImg, desc, devices }) => (
              <Card
                key={id}
                img={image}
                title={title}
                platformImg={platformImg}
                desc={desc}
                devices={devices}
              ></Card>
            )
          )}
        </div>
        <h2>Contributions</h2>
        <div className="cards">
          {projects.contributions.map(
            ({ id, title, image, platformImg, desc, devices }) => (
              <Card
                key={id}
                img={image}
                title={title}
                platformImg={platformImg}
                desc={desc}
                devices={devices}
              ></Card>
            )
          )}
        </div>
      </div>
    </div>

    {/* <footer>Footer</footer> */}

    <style jsx>{`
      body {
        margin: 0px 50px 0px 50px;
      }
      .container {
        // width: 90%;
        min-height: 100vh;
        max-width: 1600px;
        padding-left: 20px;
        align-items: center;
        justify-content: center;
        margin: auto;
        overflow: scroll;
      }

      .hero {
        position: regular;
        margin-top: 20px;
        // margin-left: -80px;
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 10px;
        line-height: 1.15;
        font-size: 48px;
      }
      .subtitle {
        font-size: 24px;
        height: 40px;
        margin-bottom: 50px;
      }

      .description {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.7em;
        // margin-top: 100px;
        // padding: 20px;
      }

      .cards {
        display: flex;
        margin-left: auto;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        margin-bottom: 150px;
      }

      .view {
        position: absolute;
        float: left;
        width: 70%;
        min-height: 200px;
        margin: 0px -50px 0px 50px;
        background-color: #dddddd;
        border-radius: 4px;
        z-index: -5;
        box-shadow: 0 6.5px 30px rgba(0, 0, 0, 0.045),
          0 52px 80px rgba(0, 0, 0, 0.09);
      }

      .cards {
      }

      .social-media {
        // position: absolute;
        // width: 90%
        margin-bottom: 75px;
        text-align: center;
      }

      .social-media a {
        margin-right: 20px;
      }

      a {
        text-decoration: none;
        color: black;
      }

      a :hover {
        color: gray;
      }

      footer {
        height: 50px;
      }
    `}</style>
  </div>
);
const pStyle = {
  fontSize: "15px",
  textAlign: "center"
};

export default Home;
{
  /* <p className="description">
            <strong>Hello!</strong> <br /><br />

            I’m a software developer with an understanding of design. For the last 8.5 years, I’m focused on making great products for Apple devices. <br /><br />

            Offscreen, I'm an avid for good tea, coffee and fantasy fiction books. I mostly listen to 70s Prog Rock and play drums. <br /><br />

            Throughout my career, I've released 10+ native iOS apps, many more web apps, founded NSIstanbul, and gave talks at meetups. <br /><br />

            I aim to work on projects that are useful, ethically responsible and well-crafted.<br /><br />

            This is my space where I publish articles, suggest books (soon) and display my work (also very soon).<br /><br />

            If you are related to anything mentioned above, feel free to subscribe to this blog and or follow me on twitter.<br /><br />

            For inquiries, seyfeddin[at]wearethread.co<br /><br />
          </p> */
}
