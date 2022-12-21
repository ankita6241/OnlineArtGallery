import header from '../Images/header.jpg';
import Art1 from '../Images/Art1.jpeg';
import Art2 from '../Images/Art2.jpeg';
import Art3 from '../Images/Art3.jpeg';
import '../App.css';
import {Container,Row,Col,Card,CardGroup} from 'react-bootstrap';
const Home=()=>{
   return(
      <div>
        <div className=" p-3 mb-2 bg-white ">
        <Container fluid style={{margin:"0 px" }}>
        <Row>
          <Col>
          <img src={header} style={{height:"50vh",width:"100%"}} alt="Paint color"/>
          </Col>
        </Row>
      </Container>
      <div className="page-header">
             <h2 className="text-dark" style={{textAlign:"center",paddingTop:"2px"}}>Welcome to Art Gallery</h2>
         </div>
         <CardGroup style={{border:"none"}}>
         <Card>
          <Card.Img variant="top" src={Art1} />
        </Card>
        <Card>
          <Card.Img variant="top" src={Art3} />
        </Card>
        <Card>
          <Card.Img variant="top" src={Art2} />
        </Card>
      </CardGroup>
         </div>
      </div>
      
     );
  }

export default Home;