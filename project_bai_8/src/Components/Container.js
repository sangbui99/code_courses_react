import React from "react";
import ProductNew from "./ProductNew";
import ProductList from "./ProductList";

class Container extends React.Component{
    // productList2 = [
    //     {
    //         id : 57,
    //         name : "Iphone 14",
    //         price : 20000000,
    //         unit : "Cái"
    //     },
    //     {
    //         id : 76,
    //         name : "SamSung Galaxy",
    //         price : 15000000,
    //         unit : "Chiếc"
    //     },
    //     {
    //         id : 99,
    //         name : "SamSung Galaxy",
    //         price : 15000000,
    //         unit : "Chiếc"
    //     }
    // ]
    // eslint-disable-next-line no-useless-constructor
    constructor(prop){
        super(prop);
        this.state = {
            product : {},
            productList : [
                {
                    id : 57,
                    name : "Iphone 14",
                    price : 20000000,
                    unit : "1"
                },
                {
                    id : 76,
                    name : "SamSung Galaxy",
                    price : 15000000,
                    unit : "2"
                },
                {
                    id : 99,
                    name : "Xiaomi",
                    price : 15000000,
                    unit : "3"
                }
            ]
        }
    }
    myFunction = (message) =>{
        alert(message);
    }
    editProduct = (id) =>{
        let index = this.state.productList.findIndex(function(i) {
            return i.id === id
        });
        const product = this.state.productList[index];
        this.setState({
            product: product
        });
    }

    deleteProduct = (id) =>{
        let arr = [...this.state.productList];
        let index = arr.findIndex(function(i) {
            return i.id === id
        });
        arr.splice(index,1);
        this.setState({
            productList : arr
        })
    }
    
    saveProduct = (product) =>{
        this.setState({
            productList : [...this.state.productList, product]
        })
    }

    render(){
        return <div class="row">
        <ProductList productList = {this.state.productList} editProduct= {this.editProduct} deleteProduct = {this.deleteProduct}/>
        <ProductNew productInfo = {this.state.product} saveProduct= {this.saveProduct}/>
        </div>
    }
}
export default Container;