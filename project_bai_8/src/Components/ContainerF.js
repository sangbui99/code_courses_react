import { useState } from "react"
import ProductNew from "./ProductNew";
import ProductList from "./ProductList";

function ContainerF(){
    const [productList, setProductList] = useState([
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
            name : "Xiaomi",
            price : 15000000,
            unit : "Chiếc"
        }
    ])
    const [product, setProduct] = useState({
        type :[]
    });
    function editProduct (id) {
        let index = productList.findIndex(function(i) {
            return i.id === id
        });
        const product = productList[index];
        setProduct(product);
    }

    function deleteProduct (id){
        let arr = [...productList];
        let index = arr.findIndex(function(i) {
            return i.id === id
        });
        arr.splice(index,1);
        setProductList(arr)
    }

    return(<div class="row">
        <ProductList productList = {productList} editProduct= {editProduct} deleteProduct = {deleteProduct}/>
        <ProductNew productInfo = {product}/>
        </div>
    )
}

export default ContainerF