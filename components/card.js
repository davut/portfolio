import React from "react";
import Link from "next/link";

// const links = [
//   { href: '', label: 'GitHub' },
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const page = "";

const Card = ({ url, title, img, platformImg, desc, devices = [] }) => (
  <div className="container">
    <a href={url}>
      <div className="card">
        <div className="wrapper">
          <img className="app-logo" src={img}></img>
          <div className="titleWrapper">
            <h3>{title}</h3>
            <img className="platform" src={platformImg}></img>
          </div>
        </div>
        <p>{desc}</p>
        <div className="devices">
          {devices.map(device => {
            return (
              <img
                key={device.id}
                className="platform"
                src={device.imgName}
              ></img>
            );
          })}
        </div>
      </div>
    </a>
    <style jsx>{`
      .container {
        margin: 50px 20px 0px 0px;
      }

      .platform {
        height: 30px;
        width: 30px;
        border-radius: 5px;
      }

      a {
        text-decoration: none;
        color: black;
      }

      .titleWrapper {
        margin-top: 10px;
        text-align: left;
      }

      h3 {
        margin: 0px;
        margin-bottom: 5px;
        padding: 0px;
      }

      h4 {
        margin: 0px;
        padding: 0px;
      }

      .card {
        // width: 80%;
        max-width: 300px;
        min-width: 300px;
        height: 200px;
        border-radius: 10px;
        margin: 10px;
        margin-top: 0px;
        box-shadow: 0 6.5px 30px rgba(0, 0, 0, 0.045),
          0 52px 80px rgba(0, 0, 0, 0.09);
        background-color: white;
        // position: absolute;
      }

      .card:hover {
        /* box-shadow: 0px 0px 30px gray; */
        transform: translateY(-5px);
        transition: 0.3s ease-in-out;
      }

      .card:not(:hover) {
        transition: 0.3s ease-in-out;
      }

      .app-logo {
        margin: 10px;
        margin-bottom: 0px;
        border-radius: 10px;
        height: 50px;
        width: 50px;
        object-fit: contain;
        // border: 1px solid gray;
        -webkit-box-shadow: 0 8px 6px -6px black;
        -moz-box-shadow: 0 8px 6px -6px black;
        box-shadow: 0 8px 6px -6px black;
      }

      .devices {
        position: relative;
        bottom: -40px;
        right: -120px;
        color: red;
      }

      p {
        margin-left: 10px;
      }

      .wrapper {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Card;
