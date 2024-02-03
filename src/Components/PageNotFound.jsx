// NotFound.js

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // If you are using React Router

const NotFound = () => {
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #000, #fff )",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container className="mt-5">
        <Row>
          <Col md={6} className="mx-auto text-center">
            <h1
              className="display-4"
              style={{
                color: "black",
                fontSize: "4em",
                marginBottom: "0.5em",
                fontWeight: 800,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "relative",
                  top: "0",
                  left: "-50px",
                  display: "inline-block",
                }}
              >
                4
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    fontWeight: 600,

                    left: "50px",
                    width: "100%",
                    height: "100%",
                    clip: "rect(0, auto, auto, 0)",
                    animation: "glitch 3s infinite linear",
                  }}
                >
                  0
                </span>
              </span>
              4
            </h1>
            <p className="lead">
              Sorry, the page you are looking for might be in another castle.
            </p>
            <Link to="/">
              <Button variant="primary">Go Home</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
