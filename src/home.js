import React from 'react';
import Card from "react-bootstrap/Card";

class Home extends React.Component {
    render() {
        return(
            <div>
                <br/>
                <Card style={{ width: '75rem', color: 'grey' }}>
                    <Card.Header as="h5">Home Page</Card.Header>
                    <Card.Body>
                        <h5>Why go ?</h5>
                        <p>
                            Just in two words, go is used for <b>quick navigation</b>. In day to day life, we do have to work with many URLs might be like links to wiki pages, applications, documentation and meetings etc. Go helps you to create and manage shortcuts for URLs so that, anyone can just navigate to that specific URL by just typing go/[short-name]. All the URLs created through go will be stored in a secure database hence you don't need to actually bookmark or keep the links in a secure place for your future reference.
                        </p>
                        <h5>How it works ?</h5>
                        <p>
                            <ol>
                                <li>Open your browser and enter go/go</li>
                                <li>Navigate to Create Page and provide details for your short link and submit the details.</li>
                                <li>You can see your short link created in search tab.</li>
                                <li>Open your browser and enter go/[short-name]</li>
                            </ol>
                        </p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Home;