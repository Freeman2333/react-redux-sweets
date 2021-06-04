import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { decreaseProductStock } from "../redux/products/productlistAction";
import PDP from "./PDP";
import { addToBasket, addToBasketItem } from "./../redux/basket/basketAction";
function PLP(props) {
  const item = props.product;
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket);
  const fallBackImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikVhGsLPMUq5TInJ--3ossfcT7ZyDUFM9e0mOgSQN6TEHQugJ&s";

  const handleDispatches = (item) => {
    if (item.stock !== 0) {
      dispatch(decreaseProductStock(item));
      basketList.unitArray.includes(item)
        ? dispatch(addToBasketItem(item))
        : dispatch(addToBasket(item));
    }
  };

  return (
    <Card id={item.SKU} className="text-center p-0 mt-4">
      <Card.Img
        variant="top"
        style={imgCard}
        src={item.img.length === 0 ? fallBackImg : item.img}
      />
      <Card.Header>{item.name}</Card.Header>
      <Card.Body style={cardBody}>
        <Card.Text>
          We have <b>{item.stock}</b> items of <b>{item.name}</b> in stock for{" "}
          <b>{item.price}kr</b> a piece.
        </Card.Text>
        <small>{item.comment}</small>
        <ButtonGroup
          className="d-flex flex-column mt-4"
          aria-label="Basic example"
        >
          <Button
            className="font-weight-bold"
            variant="info"
            disabled={item.stock === 0}
            onClick={() => handleDispatches(item)}
          >
            Buy a {item.name}
          </Button>
          <PDP info={item} />
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

const imgCard = {
  height: "200px",
  minWidth: "200px",
  objectFit: "cover",
};

const cardBody = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default PLP;
