
import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card,Row,CardBody,CardTitle,CardText } from 'react-bootstrap';
 
interface cont {
    id:string;
    name: string;
   email: string;
    phone: string;
    message:string
  }
  const ContactCard = ({cont} : {cont:cont}) =>{
 
   
   
     return(
       
              <Card style={{ width: '18rem' }}>
<Card key={cont.id}>
              <Card.Body>
                <Card.Title>{cont.name}</Card.Title>
                <Card.Text>{cont.email}</Card.Text>
                <Card.Text>{cont.phone}</Card.Text>
                <Card.Text>{cont.message}</Card.Text>
               
              </Card.Body>
 
            </Card>
            </Card>
 
          );
     
 
     }
          const ContactCards = () => {
 
            const [cont, setContacts] = useState<cont[]>([]);
         
           
         
            useEffect(() => {
         
              async function fetchContacts() {
         
                const response = await fetch('http://localhost:4561/api/contact');
         
                const data: cont[] = await response.json();
         
                setContacts(data);
         
              }
         
           
         
              fetchContacts();
         
            }, []);
         
           
         
            return (
         
              <Row>
         
                {cont.map((cont) => (
         
                  <ContactCard key={cont.id} cont={cont} />
         
                ))}
         
              </Row>
         
            );
         
          };
 
       
       
       export default ContactCards;