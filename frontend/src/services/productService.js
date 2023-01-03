import axios from "axios"

export default class ProductService{
     getProducts(){
         return axios.get("http://localhost:9090/api/products")
     }
     add(product){
            return axios.post("http://localhost:9090/api/products/add",product)
     }

     getByProductName(productName){
        return axios.get("http://localhost:9090/api/products/getByProductName?productName="+ productName)
    }
}