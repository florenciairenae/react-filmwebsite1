import { Card, Container, Row, Col, Image } from "react-bootstrap"
import beautyImage from '../assets/images/superhero/beauty.jpg'
import insideoutImage from '../assets/images/superhero/insideout.jpg'
import maleficentImage from '../assets/images/superhero/maleficent.jpg'
import nutcrackImage from '../assets/images/superhero/nutcrack.jpg'
import tangledImage from '../assets/images/superhero/tangled.jpg'
import toystoryImage from '../assets/images/superhero/toystory.jpg'

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="textDisney"> DISNEY MOVIES </h1>
                <Row>
                    <Col md={4} classname="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={beautyImage} alt="Beauty and The Beast Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Beauty and The Beast</Card.Title>
                                <Card.Text className ="text-left">
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={insideoutImage} alt="Inside Out Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Inside Out</Card.Title>
                                <Card.Text className ="text-left">
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={maleficentImage} alt="Maleficent Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Maleficent</Card.Title>
                                <Card.Text className ="text-left">
                                
                                </Card.Text>  
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={nutcrackImage} alt="The Nutcraker and The Four Realsm Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">The Nutcraker</Card.Title>
                                <Card.Text className ="text-left">
                                
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={tangledImage} alt="Tangled Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Tangled</Card.Title>
                                <Card.Text className ="text-left">
                                
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={toystoryImage} alt="Toy story Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Toys Story Vol.4</Card.Title>
                                <Card.Text className ="text-left">
                                
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuperHero