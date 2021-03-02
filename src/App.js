import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Container, Col, Image, InputGroup, FormControl } from "react-bootstrap";
import Footer from './components/footer'

function App() {
  const [stocks, setStocks] = useState(null);
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const apiURL = `https://financialmodelingprep.com/api/v3/profile/${input}?apikey=5f19ea882fea37e649bdc3230aa7ed2c`;

    const response = await axios.get(apiURL);
    setStocks(response.data);
    console.log(response.data);
    //implement error handling
  };

  return (
    <div className="App">
      <div className="search">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Type Stock Symbol Here..."
          aria-label="Search for a Stock Symbol Here"
          aria-describedby="basic-addon2"
          value={input}
          onChange={e => setInput(e.target.value)}
          // onKeyPress={(e) => e.key === 'Enter' && fetchData()} need to implement search on enter button
          />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={fetchData}>Button</Button>
        </InputGroup.Append>
      </InputGroup>
      </div>

      <div className="stocks">
        {stocks &&
          stocks.map((stock, index) => {
            return (
              <div className="details" key={index}>
                <Card style={{ width: "50rem", height: "auto" }}>
                  <Card.Body>
                    <Card.Title>
                      <h1>{stock.companyName}</h1>
                      <Col xs={6} md={4}>
                        <Image className="logo" src={stock.image} circle />
                      </Col>
                    </Card.Title>
                    <Card.Text>
                      <h4>Price: ${stock.price}</h4>
                      <p>{stock.exchange}</p>
                      <h5>{stock.symbol}</h5>
                      <p>{stock.industry}</p>
                      <p>{stock.description}</p>
                      <a href={stock.website} target="_blank">
                        {stock.companyName} Site
                      </a>
                      <p>
                        {stock.city}, {stock.state}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
