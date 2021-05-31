import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import {removeRow} from '../redux/basket/basketAction'

function CheckoutItem(props) {
    const product = props.data;
    const dispatch = useDispatch();
    const handleRemoveRow=()=>{
        dispatch(removeRow(product))
    }
    return (
        <>
            <ListGroup.Item style={listItem}>
                <p>
                    {product.purchasedUnits}st : {product.name} - {product.price}$
                </p>
                <Button variant="outline-danger" onClick={handleRemoveRow}>
                    Remove all {product.name}s 
                </Button>
            </ListGroup.Item>
        </>
    )
}

const listItem = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  };

export default CheckoutItem
