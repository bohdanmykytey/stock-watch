import React from 'react'
import {Card} from 'react-bootstrap'

function Footer() {
    return (
        <Card className="text-center">
            <Card.Header>React Hooks With React-Bootstrap</Card.Header>
            <Card.Body>
                <Card.Title>Built and Designed By: Bohdan Mykytey</Card.Title>
                <Card.Text>
                    App leverages the Financial Modeling App API
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Footer;