import { Button, Col, Container, Row } from "react-bootstrap"

const IntroSection = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="tagLine">NONTON GRATIS</div>
            <div className="tagLine">TANPA KARCIS</div>

            <div className="introButton mt-1 text-center">
              <Button className="p-2 px-4 m-2" variant="danger">
                Daftar Film
              </Button>
              <Button className="p-2 px-5 m-2" variant="light">
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default IntroSection