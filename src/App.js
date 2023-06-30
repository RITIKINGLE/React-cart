import { useState } from "react";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";

export default function MyApp() {
  let productList = [
    {
      price: 10000,
      name: "OnePlus",
      quantity: 0,
    },
    {
      price: 15000,
      name: "Iphone",
      quantity: 0,
    }
  ];

  let [productlist, setProductlist] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productlist];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    setTotalAmount(newtotalAmount);
    setProductlist(newProductList);
  };
  const DecrementQuantity = (index) => {
    let newProductList = [...productlist];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newtotalAmount);
    setProductlist(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductlist(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    console.log(index);
    let newProductList = [...productList];
    setProductlist(productlist.filter((_, i) => i !== index));

    let newtotalAmount = totalAmount; 
    newtotalAmount -= newProductList[index].quantity * newProductList[index].price;
    setTotalAmount(newtotalAmount);
    console.log(totalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
      newProductList.push({
        name:name,
        price:price,
        quantity:0
      });
    setProductlist(newProductList);

  };  

  return (
    <>
      <Navbar />

      <main className="container mt-4">
        <AddItem addItem={addItem} />
        <ProductList
          productlist={productlist}
          incrementQuantity={incrementQuantity}
          DecrementQuantity={DecrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}
