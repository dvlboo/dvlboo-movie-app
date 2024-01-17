import { Card, Col, Container, Row } from "react-bootstrap"
import trendingOne from "../images/trendingOne.webp"
import trendingTwo from "../images/trendingTwo.jpg"
import trendingThree from "../images/trendingThree.jpg"
import trendingFour from "../images/trendingFour.jpg"

const Trending = () => {
  const trendingData = [
    {
      image : trendingOne,
      title : "SPIDER-MAN",
      desc : "Petualangan seru Spider-Man melintasi dimensi dengan cerita yang menggugah.",
      update : "1 year"
    }, {
      image : trendingTwo,
      title : "MORBIUS",
      desc : "Ilmuwan vampir mencari penyembuhan, menghadapi konsekuensi gelap eksperimen.",
      update : "3 mins"
    }, {
      image : trendingThree,
      title : "OPPENHEIMER",
      desc : "Fisikawan kunci dalam pengembangan bom atom selama Perang Dunia II.",
      update : "3 mins"
    }, {
      image : trendingFour ,
      title : "JOKER",
      desc : "Gelap, kompleks, psikopat; Joker mengejutkan dengan kegilaan dan kecerdikan tak terduga.",
      update : "2 year"

    }
  ]

  return (
    <Container>
      <h2 className="text-white text-center pt-3">TRENDING MOVIES</h2>
      <Row xs={1} md={4} className="g-2">
        {trendingData.map((data, idx) => (
          <Col key={idx}>
            <Card className="m-3 p-1 cardTrending" bg="dark" text="white">
              <Card.Img variant="top" src={data.image} className="imageTrending"/>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text className="descTrending">
                  {data.desc}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small style={{color: 'white' }}>Last updated {data.update} ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Trending