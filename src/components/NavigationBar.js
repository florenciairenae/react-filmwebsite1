import {Navbar, Container, Nav} from 'react-bootstrap' //didalem parameter diisi apa saja yang mau kt masukin ke komponen kita
const NavigationBar = () =>  {
    return(
        <div>
        <Navbar variant ="dark">
            <Container>
                <Navbar.Brand href="/">AI's FILM</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
export default NavigationBar