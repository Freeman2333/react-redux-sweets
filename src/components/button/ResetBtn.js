import React from 'react'
import { useDispatch } from "react-redux";
import {resetBasket} from './../redux/basket/basketAction'
import {resetProducts} from './../redux/products/productlistAction'
import { Button } from "react-bootstrap";

function ResetBtn() {
    const dispatch = useDispatch();

    const handleReset = ()=>{
        dispatch(resetBasket())
        dispatch(resetProducts())
    }
    return (
        <Button className="d-flex justify-content-center col-12 m-2"
        variant="warning" onClick={handleReset}>
            Emty out your Basket
        </Button>
    )
}

export default ResetBtn
