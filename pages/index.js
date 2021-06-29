import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import Navbar from '../components/navbar.js'
import withTransition from "../HOC/withTransition"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import CardDeck from 'react-bootstrap/CardDeck'
import Image from 'react-bootstrap/Image'


function Home() {
  return (
    <main className="home" fluid>

      <Navbar></Navbar>
    <Container fluid className="corpo">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      
      <Container fluid className="rostofundo">
      <Jumbotron fluid="xl" className="rosto">
        <Container fluid="md" className="rostofundo">
      <h1>Mário Santos</h1>
      <p>
        Estudante de Sistemas de informação na UFF, Brasileiro e apaixonado por programação.
      </p>
      

        <Button variant="light" size="lg" className="botaofront2">      <Nav.Link href="https://www.linkedin.com/in/mário-santos-597366165/" className="botaofront">Linkedin</Nav.Link>    </Button>{' '}
        <Button variant="light" size="lg" className="botaofront2">      <Nav.Link href="https://github.com/MarioFBSantos" className="botaofront">Github</Nav.Link>    </Button>{' '}
        <Button variant="light" size="lg" className="botaofront2">      <Nav.Link href="" eventKey="disabled" disabled className="botaofront">Coming soon</Nav.Link>     </Button>{' '}
        
  
  </Container>
</Jumbotron>
</Container>
      <Container className="pe" fluid>
        <footer className="cntr-footer">

        </footer>
      </Container>
      
    </Container>

    </main>
  )
}

export default withTransition(Home);