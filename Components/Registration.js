import { Form,Card } from "react-bootstrap";
const Registration=()=>{
  
    return(
        <Card.Group>
            <div className="page-header">
             <h2 className="text-dark" style={{textAlign:"center",paddingTop:"2px"}}>User Registration</h2>
         </div>
         <hr/>
         <div className="page-header">
             <h2 className="text-dark" style={{textAlign:"center",paddingTop:"2px",color:"red"}}>User Login Information</h2>
         </div>
         <hr style={{color:"red"}}/>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Id</Form.Label>
                <Form.Control type="email" placeholder="Enter email"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"></Form.Control>
            </Form.Group>
         </Form>
         <div className="page-header">
             <h2 className="text-dark" style={{textAlign:"center",paddingTop:"2px",color:"red"}}>User Information</h2>
         </div>
         <hr style={{color:"red"}}/>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="number" placeholder="Enter Mobile Number"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNationality">
                <Form.Label>Nationality</Form.Label>
                <Form.Control type="text" placeholder="Enter Nationality"></Form.Control>
            </Form.Group>
         </Form>

        </Card.Group>
    );
}
export default Registration;