import React from "react";
import ProductNew from "./ProductNew";
import ProductList from "./ProductList";

class Container extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(prop){
        super(prop);
        this.state = {
            product : {name:"sang trong"},
            productList : [
                {
                    id : 57,
                    name : "Iphone 14",
                    price : 20000000,
                    unit : "Cái"
                },
                {
                    id : 76,
                    name : "SamSung Galaxy",
                    price : 15000000,
                    unit : "Chiếc"
                },
                {
                    id : 99,
                    name : "SamSung Galaxy",
                    price : 15000000,
                    unit : "Chiếc"
                }
            ]
        }
    }
    myFunction = (message) =>{
        alert(message);
    }
    editProduct = (id) =>{
        alert(`edit ${id}`);
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
    render(){
        return <div class="row">
        <ProductList productList = {this.state.productList} editProduct= {this.editProduct} deleteProduct = {this.deleteProduct}/>
        <ProductNew productInfo = {this.state.product} saveProduct= {this.myFunction}/>
        </div>
    }
}
export default Container;