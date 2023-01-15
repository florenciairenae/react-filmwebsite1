import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from '../assets/images/trending/antman.jpg'
import avatarImage from '../assets/images/trending/avatar.jpg'
import blackwidowImage from '../assets/images/trending/blackwidow.jpg'
import guardianImage from '../assets/images/trending/guardian.jpg'
import knockImage from '../assets/images/trending/knock.jpg'
import marioImage from '../assets/images/trending/mario.jpg'

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <br/>
                <h1 className="text-white"> TRENDING MOVIES </h1>
                <Row>
                    <Col md={4} classname="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={antmanImage} alt="Antman Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Antman Quantumania</Card.Title>
                                <Card.Text className ="text-left">
                                Scott Lang and Hope van Dyne, along with Hope's parents Hank Pym and Janet van Dyne and Lang's daughter Cassie, go on a new adventure exploring the Quantum Realm that pushes their limits and pits them against Kang the Conqueror.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={avatarImage} alt="Avatar Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Avatar: The Way of Water</Card.Title>
                                <Card.Text className ="text-left">
                                “Avatar: The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={blackwidowImage} alt="Black Widow Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Black Widow</Card.Title>
                                <Card.Text className ="text-left">
                                In Marvel Studios' action-packed spy thriller "Black Widow," Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.  Will she be able to overcome on this challenge?
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={guardianImage} alt="Guardian of The Galaxy Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">The Guardian of The Galaxy Vol.2</Card.Title>
                                <Card.Text className ="text-left">
                                After saving Xandar from Ronan's wrath, the Guardians are now recognized as heroes. Now the team must help their leader Star Lord (Chris Pratt) uncover the truth behind his true heritage. Along the way, old foes turn to allies and betrayal is blooming.
                                <br/>
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={knockImage} alt="Antman Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Knock at the Cabin</Card.Title>
                                <Card.Text className ="text-left">
                                Knock at the Cabin is an adaptation of the 2018 horror novel The Cabin at the End of the World by Paul Tremblay, who had signed an option with FilmNation Entertainment in late 2017, prior to the book's publication, and had to keep secret to the film.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>   
                                </div> 
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} classname="movieWrapper">
                        <Card className="movieImage">
                            <Image src={marioImage} alt="Mario Movies" className="Images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Super Mario The Movies</Card.Title>
                                <Card.Text className ="text-left">
                                A Brooklyn Plumber named Mario, travels through the Mushroom Kingdom with a Princess named Peach and an Anthropomorphic Mushroom named Toad to find Mario's Brother to find Mario's Brother, Luigi, and to save the world from a ruthless fire breathing Koopa.
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

export default Trending