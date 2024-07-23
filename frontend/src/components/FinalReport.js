import React from 'react';
import {Container, Row, Col, Table, Image} from 'react-bootstrap';
import logo from "../assets/images/logo.png";
import {useLocation} from "react-router-dom";


const FinalReport = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const report = JSON.parse(decodeURIComponent(query.get('data')))

    return (
        <div>
            <Container style={{marginRight: "150px", marginLeft: "150px"}} className="my-5">
                <Row className="mb-4">
                    <Col xs={8}>
                        <Image src={logo} fluid/>
                    </Col>
                </Row>
                <hr/>
                <Row className="mb-4">
                    <Col xs={6}>
                        <p><strong>Patient Name:</strong> {report[0].name}</p>
                        <p><strong>Gender:</strong> {report[0].gender}</p>
                        <p><strong>Age:</strong> {report[0].age}</p>
                        <p><strong>Contact No:</strong> {report[0].mobile_num}</p>
                        <p><strong>Address:</strong> {report[0].address}</p>
                    </Col>
                    <Col xs={6}>
                        <p><strong>Test Name:</strong> {report[0].test_name}</p>
                        <td><strong>Test Date:</strong> {report[0].date_created}</td>
                    </Col>
                </Row>
                <hr/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th className="bg-success text-white">Particulars</th>
                        <th className="bg-success text-white">Reference Value</th>
                        <th className="bg-success text-white">Unit</th>
                        <th className="bg-success text-white">Result Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {report[0].result.map((test, index) => (
                    <tr key={test.key}>
                        <td>{test.particulars}</td>
                        <td>{test.referenceValue}</td>
                        <td>{test.unit}</td>
                        <td>{test.resultValue}</td>
                    </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>

            {/*<div className="d-flex justify-content-center">*/}
            {/*    <button className="btn-lg px-lg-4 py-lg-1 bg-success text-white border-0">Done</button>*/}
            {/*</div>*/}

        </div>
    );
};

export default FinalReport;
