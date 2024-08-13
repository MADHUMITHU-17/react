import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/img/garden-logo.png";

function Home(){
    return(
        <>
        <section>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Home;