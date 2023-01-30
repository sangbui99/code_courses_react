import {useState} from "react";

const ProductNewF = () => {

    const [productInfo, setInfo] = useState({name: "",code: ""})
    function changeValue() {
        setInfo({})
    }

    function saveProduct() {

    }
  return (
    <div class="col-md-5">
    <fieldset class="border p-2">
        <legend class="scheduler-border">Thông tin sản phẩm</legend>
        <form id="productForm">
            <div class="form-group row mb-2">
                <div class="col-md-4">
                    <label id="lblTenSanPham">Tên sản phẩm:</label>
                </div>
                <div class="col-md-8">
                    <input type="text" class="form-control" value={productInfo.name} onChange = {changeValue} id="productName"
                        placeholder="Nhập tên sản phẩm ..." />
                    <input type="hidden" id="productId" />
                </div>
            </div>
            <div class="form-group row mb-2">
                <div class="col-md-4">
                    <label>Mã sản phẩm:</label>
                </div>
                <div class="col-md-8">
                    <input type="text" class="form-control" value={productInfo.code} onChange = {changeValue} id="productCode" placeholder="Nhập mã sản phẩm ..." />
                </div>
            </div>

            <div class="form-group row">
                        <div class="offset-sm-4 col-sm-7 pull-right">
                            <button type="button" class="btn btn-primary" onClick={saveProduct()}>Save</button>
                        </div>
            </div>
        </form>
    </fieldset>
    </div>
  )
}

export default ProductNewF