import React, { useEffect } from "react";
import Goods from "../data/products.json";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/products/productlistAction";
import { Col, Container } from "react-bootstrap";
import PLP from "./PLP";
const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const products = productList.productArray;
  const loadData = JSON.parse(JSON.stringify(Goods));
  useEffect(() => {
    if (products.length === 0) {
      loadData.productData.forEach((p) => {
        dispatch(addProduct(p));
      });
    }
  }, []);
  return (
    <>
      <Container className="d-flex justify-content-between flex-wrap">
        <Col xs={12} className="d-flex justify-content-center mt-4 bg-white">
          <h3>
            Choose between our <b>{productList.numberOfProducts}</b> diffrent
            treats!
          </h3>
        </Col>
        {products.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={4} className="d-flex">
            <PLP key={item.SKU} className="d-flex" product={item} />
          </Col>
        ))}
      </Container>
    </>
  );
};

export default Home;
