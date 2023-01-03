import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";
import OrderService from "../services/orderService";

export default function OrderDetail() {
    let { id } = useParams();

    const [order, setOrder] = useState({});

    useEffect(()=>{
        let orderService = new OrderService()
        orderService.getByOrderId(id).then(result=>setOrder(result.data.data))
    },[])


    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{order.orderId}</Card.Header>
                        <Card.Description>
                           BLA BLA <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Accept
                            </Button>
                            <Button basic color="red">
                                Decline

                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}
