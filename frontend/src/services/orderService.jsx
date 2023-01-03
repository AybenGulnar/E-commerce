import axios from "axios"

export default class OrderService{
    getOrders(){
        return axios.get("http://localhost:8989/order")
    }

}