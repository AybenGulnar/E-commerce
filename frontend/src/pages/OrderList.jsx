import axios from "axios";
import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import ProductService from "../services/productService";
import {addToCart} from "../store/actions/cartActions";
import {toast} from "react-toastify";
import {Button, Icon, Menu, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Categories from "../layouts/Categories";


function OrderList() {
    const [data, setData] = React.useState([]);

    const getItems = () => {
        axios.get("http://localhost:8989/order").then(res => {
            console.log(res.data);
            setData(res.data)
        })
    }


    return (
        <div>
            <Categories/>
            <button className="ui secondary button" onClick={getItems}>Get Orders List
            </button>
            {data.map(item=>{
                return <div key={item.id}>
                    <br/>
                    <p> Order name: {item.name} </p>
                    <br/>
                    <p> Order description: {item.description} </p>
                    <br/>
                    <p> Order price: {item.price} </p>
                    <br/>
                </div>
            })}
        </div>
    );
}
export default OrderList;