import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTestForm = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTestName" style={{marginBottom:"10px"}}>
                        <Form.Label>Test Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter test name" />
                    </Form.Group>
                    <Form.Group controlId="formTestDescription" style={{marginBottom:"10px"}}>
                        <Form.Label>Test Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter test description" />
                    </Form.Group>
                    <Form.Group controlId="formTestPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter price" />
                    </Form.Group>
                    <hr />
                    <Button variant="success" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddTestForm;
