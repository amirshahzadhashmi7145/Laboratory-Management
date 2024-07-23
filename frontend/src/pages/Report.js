import React, {useEffect, useState} from 'react';
import {Button, Spinner, Table} from 'react-bootstrap';
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReportPage = () => {
    const [filteredTests, setFilteredTests] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');
    const [loading,setLoading] = useState(false);


    async function fetchPendingData() {
        try{
            setLoading(true)
            const response = await fetch('http://localhost:5000/pendingtests', {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json"
                },
            })

            if (!response.ok) {
                throw new Error('Network Response Was not Ok!')
            }

            const data = await response.json()
            console.log(data)
            setFilteredTests(data)
            setFilterStatus('pending')

            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log("Error Fetching Data:", e);
        }
    }

    async function fetchCompletedData() {
        try{
            setLoading(true)
            const response = await fetch('http://localhost:5000/completedtests', {
                method: 'GET',
                headers: {
                    'Content-Type': "application/json"
                },
            })

            if (!response.ok) {
                throw new Error('Network Response Was not Ok!')
            }

            const data = await response.json()
            setFilteredTests(data);
            setFilterStatus('completed')
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log("Error Fetching Data:", e);
        }
    }


    const handleEdit = (testId) => {
        // Implement edit functionality
    };

    const handleDelete = async (testId) => {
        try {
            const response = await fetch('http://localhost:5000/deletetest',{
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({testId})
            })
            if(!response.ok) {
                console.log(response)
                console.log("Some Error Occured");
            }
            else {
                const updatedData = filteredTests.filter((test) => test.id !== testId);
                setFilteredTests(updatedData);
                alert("Record Deleted!")
            }
        }
        catch (e) {
            alert("Internal server error: ");
        }
    };

    const handleDownloadReport = (testId) => {
        const test = filteredTests.filter((test) => test.id === testId);
        if(filterStatus === "pending"){
            const encodedData = encodeURIComponent(JSON.stringify(test))
            const url = `/addreport?data=${encodedData}`;
            window.open(url,'_blank')
        }
        else{
            const encodedData = encodeURIComponent(JSON.stringify(test))
            const url = `/downloadreport?data=${encodedData}`;
            window.open(url,'_blank')
        }
    };

    return (
        <div>
            <Header/>
            <div className="container mt-4">
                <h2 className="mb-4">Reports</h2>
                <div className="d-flex mb-4 justify-content-center">
                    <Button variant="success" className="me-2" style={{paddingLeft: "120px", paddingRight: "120px"}}
                            onClick={() => fetchPendingData()}>
                        Pending
                    </Button>
                    <Button style={{paddingLeft: "120px", paddingRight: "120px"}} variant="success"
                            onClick={() => fetchCompletedData()}>
                        Completed
                    </Button>
                </div>

                <div className="mb-4">
                    {/*<h3 className="text-center">{filterStatus === 'pending' ? 'Pending Tests' : 'Completed Tests'}</h3>*/}
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : filteredTests.length > 0 ? (
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th className="bg-success text-white">Patient Name</th>
                                <th className="bg-success text-white">Test Name</th>
                                <th className="bg-success text-white">Date</th>
                                <th className="bg-success text-white">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredTests.map(test => (
                                <tr key={test.id}>
                                    <td>{test.name}</td>
                                    <td>{test.test_name}</td>
                                    <td>{test.date_created}</td>
                                    <td>
                                        {filterStatus === 'pending' && (
                                            <>
                                                <Button variant="info" className="me-2"
                                                        onClick={() => handleEdit(test.id)}>Edit</Button>
                                                <Button variant="danger" className="me-2"
                                                        onClick={() => handleDelete(test.id)}>Delete</Button>
                                            </>
                                        )}
                                        <Button variant="secondary"
                                                className={filterStatus === 'pending' ? "btn-secondary" : "btn-success"}
                                                onClick={() => handleDownloadReport(test.id)}>{filterStatus === 'pending' ? "Add Report" : "Download"}</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p className="text-center">{filterStatus === 'pending' ? 'No Pending Tests Available!' : filterStatus === 'completed' ? 'No Completed Tests Available!' : 'Select Tests!'}</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default ReportPage;
