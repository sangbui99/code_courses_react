/* eslint-disable no-useless-constructor */
import React from "react";
import FuntionComponentExample from "./FuntionComponentExample";

class ProductList extends React.Component {
    constructor(prop) {
        super(prop);
    }
    deleteProduct = (id) => {
        this.props.deleteProduct(id);
    }
    editProduct = (id) => {
        this.props.editProduct(id);
    }
    static defaultProps = {
        name: "ABC"
    }
    render() {
        return <div class="col-md-7">
            <fieldset class="border p-2">
                <FuntionComponentExample />
                <legend class="scheduler-border">Danh sách sản phẩm</legend>
                <table class="table table-sm table-striped table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Đơn vị tính</th>
                            <th scope="col">
                                <div class="text-center">#</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.productList.map((product) => {
                                return <tr key={product.Id}>
                                    <td>{product.Id}</td>
                                    <td>{product.Name}</td>
                                    <td>{product.Code}</td>
                                    <td>{product.Price}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary" onClick={() => this.editProduct(product.Id)}>Sửa</button>
                                        <button type="button" class="btn btn-danger" onClick={() => this.deleteProduct(product.Id)}>Xoá</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </fieldset>
        </div>
    }
}
export default ProductList