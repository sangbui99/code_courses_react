import React from "react";
import ProductNew from "./ProductNew";
import ProductList from "./ProductList";
import productAPI from "../API/ProductAPI";

class Container extends React.Component {
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
    constructor(prop) {
        super(prop);
        this.state = {
            product: {},
            productList: []
        }
    }
    myFunction = (message) => {
        alert(message);
    }

    fetchProduct = async () => {
        const response = await productAPI.getAll();
        this.setState({
            productList: [...response.data]
        })
    }

    componentDidMount() {
        this.fetchProduct();
    }
    componentDidUpdate() {

    }

    editProduct = (id) => {
        let index = this.state.productList.findIndex(function (i) {
            return i.id === id
        });
        const product = this.state.productList[index];
        this.setState({
            product: product
        });
    }

    deleteProduct = async (id) => {
        await productAPI.delete(id).then(
            async () => this.fetchProduct()
        )
    }

    saveProduct = async (product) => {
        if (product.id) {
            //update
            await productAPI.update(product).then(
                async () => this.fetchProduct()
            );
        }
        else {
            ///create
            await productAPI.create(product).then(
                async () => this.fetchProduct()
            );
        }
    }

    render() {
        return <div class="row">
            <ProductList productList={this.state.productList} editProduct={this.editProduct} deleteProduct={this.deleteProduct} />
            <ProductNew productInfo={this.state.product} saveProduct={this.saveProduct} />
        </div>
    }
}
export default Container;