import { useState } from "react";

function FuntionComponentExample(){
    const [status, setStatus] = useState("Đang đi học")
    function changeStatus() {
        setStatus(status === "Đang đi học" ? "Đã nghỉ học": "Đang đi học")
    }
    return(
        <>
         <h5>{status}</h5>
         <button onClick={changeStatus}>Click </button>
        </>
    )
}
export default FuntionComponentExample;