import React from 'react'
import { Card } from 'react-bootstrap'

function Footer() {
    return (
        <div class="footer">
        <Card>
            <Card.Header>React Hooks App with React-BootStrap</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                    App Built Leveraging the Financial Modeling Prep API, I hope you enjoy
                    using it as much as I enjoyed building it.                         
                    </p>
                    <footer className="blockquote-footer">
                        Bohdan Mykytey
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Footer;