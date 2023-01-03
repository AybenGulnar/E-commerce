import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import {Grid} from "semantic-ui-react";
import {Route} from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import {ToastContainer} from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import OrderList from "../pages/OrderList";
import OrderDetail from "../pages/OrderDetail";
import OrderAdd from "../pages/OrderAdd";
import payment from "../pages/payment";
import Welcomepage from "../pages/welcomepage";

export default function Dashboard() {
    return (
        <div>
            <div>
                <ToastContainer position="bottom-right"/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Route exact path="/" component={Welcomepage}/>
                            <Route exact path="/api/products" component={ProductList}/>
                            <Route path="/products/:name" component={ProductDetail}/>
                            <Route path="/cart" component={CartDetail}/>
                            <Route path="/product/add" component={ProductAdd}/>
                            <Route exact path="/order" component={OrderList}/>
                            <Route path="/order/:id" component={OrderDetail}/>
                            <Route path="/order/add" component={OrderAdd}/>
                            <Route path="/payment" component={payment}/>


                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}
