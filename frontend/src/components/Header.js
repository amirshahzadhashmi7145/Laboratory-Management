import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import AddTestForm from "./AddTestForm";
import CreateNewForm from "./CreateNewForm";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const [addTestShow, setAddTest] = useState(false);
    const [createNewShow,setCreateNew] = useState(false);


    const handleAddTestClose = () => setAddTest(false);
    const handleAddTestShow = () => setAddTest(true);

    const handleCreateNewClose = () => setCreateNew(false);
    const handleCreateNewShow = () => setCreateNew(true);

    return (
        <header className="bg-success text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3" onClick={() => navigate('/')}>Laboratory Management System</h1>
                <div>
                    <Button variant="light" className="mx-2" onClick={handleCreateNewShow}>Create New</Button>
                    <Button variant="light" className="mx-2" onClick={() => navigate('/reports')}>Reports</Button>
                    <Button variant="light" className="mx-2" onClick={handleAddTestShow}>Add Test</Button>
                </div>
            </div>

            <AddTestForm handleClose={handleAddTestClose} show={addTestShow} />
            <CreateNewForm handleClose={handleCreateNewClose} show={createNewShow} />
        </header>


    );
};

export default Header;
