/* eslint-disable no-useless-constructor */
import React from "react";

class ProductNew extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            name: "A",
            status: "Đang đi học",
        }
    }

    saveProd = () => {
        // this.props.saveProduct("Xin chao");
        this.setState({
            status : this.state.status === "Đang đi học" ? "Đã nghỉ học" : "Đang đi học",
        });
    }

    render() {
        return <div class="col-md-5">
            <fieldset class="border p-2">
                <legend class="scheduler-border">Thông tin sản phẩm</legend>
                <form id="productForm">
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label id="lblTenSanPham">Tên sản phẩm:</label>
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" value={this.props.productInfo.name} id="productName"
                                placeholder="Nhập tên sản phẩm ..." />
                            <input type="hidden" id="productId" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label>Mã sản phẩm:</label>
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" value={this.state.status} id="productCode" placeholder="Nhập mã sản phẩm ..." />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label>Loại sản phẩm:</label>
                        </div>
                        <div class="form-check col-md-8">
                            <div class="col-md-6">
                                <input class="form-check-input" type="checkbox" value="1" name="productType" />
                                <label class="form-check-label" for="productType">Đồ gia dụng</label><br />
                                <input class="form-check-input" type="checkbox" value="2" name="productType" />
                                <label class="form-check-label" for="productType">Đồ điện tử</label><br />
                            </div>
                            <div class="col-md-6">
                                <input class="form-check-input" type="checkbox" value="3" name="productType" />
                                <label class="form-check-label" for="productType">Quần áo</label><br />
                                <input class="form-check-input" type="checkbox" value="4" name="productType" />
                                <label class="form-check-label" for="productType">Sách</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label>Khuyến mãi:</label>
                        </div>
                        <div class="form-check col-md-8">
                            <div class="col-md-6">
                                <input class="form-check-input" type="radio" value="1" name="productPromotion" />
                                <label class="form-check-label" for="promotion">Đang khuyến mãi</label><br />
                                <input class="form-check-input" type="radio" value="2" name="productPromotion" />
                                <label class="form-check-label" for="promotion">Không</label><br />
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label>Đơn vị tính:</label>
                        </div>
                        <div class="col-md-8">
                            <select class="form-control" id="productUnit" value={this.props.productInfo.unit}>
                                <option value="">-- Chọn đơn vị tính --</option>
                                <option value="1">Cái</option>
                                <option value="2">Chiếc</option>
                                <option value="3">Bao</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label>Giá sản phẩm:</label>
                        </div>
                        <div class="col-md-8">
                            <input type="number" class="form-control" id="productPrice"
                                placeholder="Nhập giá sản phẩm ..." />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label>Ngày nhập:</label>
                        </div>
                        <div class="col-md-8">
                            <input type="date" class="form-control" id="productImportDate" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-4">
                            <label>Mô tả:</label>
                        </div>
                        <div class="col-md-8">
                            <textarea class="form-control" id="productDescription"
                                placeholder="Mô tả sản phẩm ..."></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-4 col-sm-7 pull-right">
                            <button type="button" onclick="saveProduct()" class="btn btn-primary" onClick={this.saveProd}>Save</button>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    }
}
export default ProductNew;