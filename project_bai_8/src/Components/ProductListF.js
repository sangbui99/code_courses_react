import { useState } from "react";

const ProductListF = () => {
    const [status, setStatus] = useState("Đang đi học")
    function changeStatus() {
        setStatus(status === "Đang đi học" ? "Đã nghỉ học": "Đang đi học")
    }
    return (
      <div>ProductListF</div>
   )
}

export default ProductListF




