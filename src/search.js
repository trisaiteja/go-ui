import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table'

class Search extends React.Component {
    render() {
        return(
            <div>
                <br/>
                <Card style={{ width: '75rem', color: 'grey' }}>
                    <Card.Header as="h5">Search Page</Card.Header>
                    <Card.Body>
                        <InputGroup>
                            <Form style={{ padding: 10 }}>
                                <Form.Group>
                                    <Form.Label><b>Short Name</b></Form.Label><Form.Control type="text" />
                                </Form.Group><br/>
                                <Button variant="success" type="submit">
                                    Search
                                </Button>
                            </Form>
                        </InputGroup>
                    </Card.Body>
                </Card>
                <br/><br/>
                <div>
                    <Table striped bordered hover style={{ color: 'grey', width: '75rem' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Name</th>
                                <th style={{ textAlign: 'center' }}>Short Name</th>
                                <th style={{ textAlign: 'center' }}>Description</th>
                                <th style={{ textAlign: 'center' }}>Go Link</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Google Search</td>
                                <td>google</td>
                                <td>Google Search Go Link</td>
                                <td>http://go/google</td>
                                <td style={{ textAlign: 'center' }}><Button variant="danger" type="submit">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>LinkedIn Website</td>
                                <td>linkedin</td>
                                <td>LinkedIn Website Login</td>
                                <td>http://go/linkedin</td>
                                <td style={{ textAlign: 'center' }}><Button variant="danger" type="submit">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>Udemy Website</td>
                                <td>udemy</td>
                                <td>Udemy Learning Website Login</td>
                                <td>http://go/udemy</td>
                                <td style={{ textAlign: 'center' }}><Button variant="danger" type="submit">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>Vertafore Website</td>
                                <td>vertafore</td>
                                <td>Vertafore Website Login</td>
                                <td>http://go/vertafore</td>
                                <td style={{ textAlign: 'center' }}><Button variant="danger" type="submit">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>Microsoft Website</td>
                                <td>microsoft</td>
                                <td>Microsoft Website Login</td>
                                <td>http://go/microsoft</td>
                                <td style={{ textAlign: 'center' }}><Button variant="danger" type="submit">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>Apple Website</td>
                                <td>apple</td>
                                <td>Apple Website Login</td>
                                <td>http://go/apple</td>
                                <td style={{ textAlign: 'center' }}><Button variant="danger" type="submit">Delete</Button></td>
                            </tr>
                            <tr>
                                <td>Samsung Website</td>
                                <td>samsung</td>
                                <td>Samsung Website Login</td>
                                <td>http://go/samsung</td>
                                <td style={{ textAlign: 'center' }}><Button variant="danger" type="submit">Delete</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Search;