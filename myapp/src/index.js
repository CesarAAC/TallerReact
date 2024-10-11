import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <Container className="mt-3">
   <Row>
     <App></App>
   </Row>
 </Container>
);