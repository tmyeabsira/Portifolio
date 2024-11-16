import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p>Click below to download my Resume:</p>
      
      <div id="button_h" className="ac_btn btn">
      <a
        href={`${process.env.PUBLIC_URL}/Yeabsira-Tesfaye-Minyelshowa_Resume.pdf`}
        download="Yeabsira-Tesfaye-Minyelshowa_Resume.pdf"
      >
        Download My Resume
      </a>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
      </Container>
    </HelmetProvider>
  );
};
