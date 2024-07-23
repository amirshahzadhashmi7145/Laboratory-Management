import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import selectorEngine from "bootstrap/js/src/dom/selector-engine";

const CreateNewForm = ({ show, handleClose }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [selectedTests, setSelectedTests] = useState([]);

    const handleTestSelection = (testName) => {
        const isSelected = selectedTests.some(test => test.name === testName);
        if (isSelected) {
            setSelectedTests(selectedTests.filter(test => test.name !== testName));
        } else {
            setSelectedTests([...selectedTests, { name: testName, price: '' }]);
        }
    };

    const handlePriceChange = (testName, price) => {
        setSelectedTests(selectedTests.map(test =>
            test.name === testName ? { ...test, price } : test
        ));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type' : "application/json"
                },
                body : JSON.stringify({
                    age,
                    name,
                    mobile,
                    gender,
                    address,
                    selectedTests
                })
            })

            if(!response.ok) {
                throw new Error('Network Response Was not Ok!')
            }

            alert("Test Added Successfully")
            setAddress('');
            setMobile('');
            setGender('');
            setName('');
            setSelectedTests([]);
            setAge('');

        } catch (e) {
            console.error('Error adding user with tests:', e);
        }
        // Close the modal after submission
        handleClose();

    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New User Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {/* User Information Fields */}
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </Form.Group>

                    {/* Tests Selection */}
                    <Form.Group className="mb-3">
                        <Form.Label>Select Tests</Form.Label>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="CBC"
                                label="CBC"
                                checked={selectedTests.some(test => test.name === "CBC")}
                                onChange={() => handleTestSelection("CBC")}
                            />
                            {selectedTests.some(test => test.name === "CBC") && (
                                <Form.Control
                                    type="text"
                                    placeholder="Price"
                                    value={selectedTests.find(test => test.name === "CBC").price}
                                    onChange={(e) => handlePriceChange("CBC", e.target.value)}
                                />
                            )}
                            <Form.Check
                                type="checkbox"
                                id="STOOL"
                                label="STOOL"
                                checked={selectedTests.some(test => test.name === "STOOL")}
                                onChange={() => handleTestSelection("STOOL")}
                            />
                            {selectedTests.some(test => test.name === "STOOL") && (
                                <Form.Control
                                    type="text"
                                    placeholder="Price"
                                    value={selectedTests.find(test => test.name === "STOOL").price}
                                    onChange={(e) => handlePriceChange("STOOL", e.target.value)}
                                />
                            )}
                            <Form.Check
                                type="checkbox"
                                id="Blood Group"
                                label="Blood Group"
                                checked={selectedTests.some(test => test.name === "Blood Group")}
                                onChange={() => handleTestSelection("Blood Group")}
                            />
                            {selectedTests.some(test => test.name === "Blood Group") && (
                                <Form.Control
                                    type="text"
                                    placeholder="Price"
                                    value={selectedTests.find(test => test.name === "Blood Group").price}
                                    onChange={(e) => handlePriceChange("Blood Group", e.target.value)}
                                />
                            )}
                            {/* Add more tests as needed */}
                        </div>
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateNewForm;
