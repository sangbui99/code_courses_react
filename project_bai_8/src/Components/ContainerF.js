import { useState, useEffect } from "react"
// import ProductNew from "./ProductNew";
import ProductNew from "./ProductNew";
import ProductList from "./ProductList";

function ContainerF(){
    const [productList, setProductList] = useState([
        {
            id : 57,
            name : "Iphone 14",
            price : 20000000,
            unit : "1",
            type : ["1","2"]
        },
        {
            id : 76,
            name : "SamSung Galaxy",
            price : 15000000,
            unit : "2",
            type : ["2","3"]
        },
        {
            id : 99,
            name : "Xiaomi",
            price : 15000000,
            unit : "3",
            type : ["1","3"]
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

    function saveProduct(product){
        const maxId = Math.max(...productList.map(x => x.id));
        product.id = maxId + 1;
        setProductList([...productList,product]);
    }
//  useEffect chia làm 4 trường hợp
    useEffect(() => {
        console.log("useEffect đang được thực hiện");
    },[productList]);

    return(<div class="row">
        <ProductList productList = {productList} editProduct= {editProduct} deleteProduct = {deleteProduct}/>
        <ProductNew productInfo = {product} saveProduct= {saveProduct}/>
        </div>
    )
}

export default ContainerF