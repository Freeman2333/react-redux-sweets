import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, ListGroup } from "react-bootstrap";
import Alerts from '../Alert';
import CheckoutItem from "./CheckoutItem";
function Checkout() {
    const dispatch = useDispatch();
    const completeOrder = useSelector(state=>state.basket)
    const stateBasket = completeOrder.unitArray;
    const browserBasket = JSON.parse(localStorage.getItem("Basket"))
    const emtyBasketText = "No items are in the basket yet ...";
    console.log(stateBasket)
    console.log(completeOrder.numberOfUnits)
    return (
        <Container>
            <Card className="text-center mt-4">
                <Card.Header>
                    basket
                </Card.Header>
                <Card.Body style={cardBody}>
                    {completeOrder.numberOfUnits === 0 ? (<Alerts mess={emtyBasketText}/>):(
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="light" style={listItem}>
                                Sum of items: {completeOrder.numberOfUnits}
                            </ListGroup.Item>
                            {stateBasket.map((p,i)=>{
                                console.log(p)
                                return <CheckoutItem key={i} data={p}/>
                            })}
                        </ListGroup>
                    )}
                </Card.Body>
            </Card>
        </Container>
    )
}

const cardBody = {
    minHeight: "500px"
  };
  
  const listItem = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  };

export default Checkout
