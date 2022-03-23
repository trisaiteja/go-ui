import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.css";

class Create extends React.Component {
    render() {
        return(
            <div>
                <br/>
                <Card style={{ width: '75rem', color: 'grey' }}>
                    <Card.Header as="h5">Create Page</Card.Header>
                    <Card.Body>
                        <InputGroup>
                            <Form style={{ padding: 10 }}>
                                <Form.Group>
                                    <Form.Label><b>Name</b></Form.Label><Form.Control type="text" placeholder="Enter name" required />
                                </Form.Group><br/>
                                <Form.Group>
                                    <Form.Label><b>Short Name</b></Form.Label><Form.Control type="text" placeholder="Enter short name" required />
                                </Form.Group><br/>
                                <Form.Group>
                                    <Form.Label><b>Description</b></Form.Label><Form.Control type="text" placeholder="Enter description" />
                                </Form.Group><br/>
                                <Button variant="success" type="submit">
                                    Create
                                </Button>
                            </Form>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Create;