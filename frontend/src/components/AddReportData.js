import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Table, Image, Button} from 'react-bootstrap';
import logo from "../assets/images/logo.png";
import {useLocation} from "react-router-dom";
import {Form} from "react-bootstrap";
import {testsData} from "../assets/tests/testsData";


const FinalReport = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const report = JSON.parse(decodeURIComponent(query.get('data')))
    const name = report[0].test_name;

    useEffect(() => {
        testsData.map((data) => {
            if (data.testName.toLowerCase() === name.toLowerCase()) {
                setRows(data.details)
            }
        })
    }, []);


    const [rows, setRows] = useState([]);

    const handleAddRow = () => {
        setRows([...rows, { particulars: '', referenceValue: '', unit: '', resultValue: '' }]);
        console.log(rows)
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [name]: value } : row
        );
        setRows(updatedRows);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., sending data to server
    }

    async function handleDone() {
        console.log(rows)
        console.log(report[0].id)
        console.log(JSON.stringify(rows));
        try {
            const response = await fetch('http://localhost:5000/addreport',{
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({testId:report[0].id,result:rows})
            })
            if(!response.ok) {
                console.log(response)
                console.log("Some Error Occured");
            }
            else {
                alert("Report Generated!")
                window.close();
            }
        }
        catch (e) {
            alert("Internal server error: ");
        }
    }
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
                        <th>Particulars</th>
                        <th>Reference Value</th>
                        <th>Unit</th>
                        <th>Result Value</th>
                    </tr>
                    </thead>
                    <tbody>

                    {rows.length > 0 && rows.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="particulars"
                                    value={row.particulars}
                                    onChange={(e) => handleInputChange(index, e)}
                                    required
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="referenceValue"
                                    value={row.referenceValue}
                                    onChange={(e) => handleInputChange(index, e)}
                                    required
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="unit"
                                    value={row.unit}
                                    onChange={(e) => handleInputChange(index, e)}
                                    required
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="resultValue"
                                    value={row.resultValue}
                                    onChange={(e) => handleInputChange(index, e)}
                                    required
                                />
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </Table>
                <Button className="px-4 btn-success" onClick={() => handleAddRow()}>Add</Button>
            </Container>

            <div className="d-flex justify-content-center" onClick={() => handleDone()}>
                <Button className="btn-success px-5">Done</Button>
            </div>
        </div>
    );
};

export default FinalReport;
