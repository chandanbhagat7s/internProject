import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Loader from "./Loader";
import { FaBusinessTime } from "react-icons/fa";
import { VscLayersActive } from "react-icons/vsc";
import { IoMdDoneAll } from "react-icons/io";
import Chart from "./charts";

export default function Home() {
  const [responseData, setResponseData] = useState();
  async function data() {
    const d = await axios.get("/api/AdminHome/", {
      withCredentials: true,
      //   crossorigin: "",
      //   "Access-Control-Allow-Origin": "*",
    });

    setResponseData({ ...d.data?.data });
  }
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      {!responseData ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="card">
            <div className="card-body">
              <blockquote className="blockquote mb-0 text-center">
                <p>Welcome To DS Box+ Admin Panel</p>
              </blockquote>
            </div>
          </div>

          <Container className="my-2">
            <Row>
              <Col>
                <Card border="primary" style={{ width: "18rem" }}>
                  <Card.Header>Trial Businesses</Card.Header>

                  <div className="d-flex justify-content-center align-items-center p-4 h2 ">
                    <FaBusinessTime />
                    <div className="mx-2 h-10">
                      {" "}
                      {responseData.trialBusiness}
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card border="primary" style={{ width: "18rem" }}>
                  <Card.Header>Active Businesses</Card.Header>

                  <div className="d-flex justify-content-center align-items-center p-4 h2">
                    <VscLayersActive />
                    <div className="mx-2 h-10">
                      {" "}
                      {responseData.activeBusiness}
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card border="primary" style={{ width: "18rem" }}>
                  <Card.Header>All Businesses</Card.Header>

                  <div className="d-flex justify-content-center align-items-center p-4 h2">
                    <IoMdDoneAll />
                    <div className="mx-2 h-10">
                      {" "}
                      {responseData.totalBusiness}
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Chart
                weekdata={{
                  currentweek: responseData.currentWeekRecords,
                  previousWeek: responseData.pastWeekRecords,
                }}
              />
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
