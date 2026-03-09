import React, { useState } from "react";

const Semáforo = () => {
    const [color, setColor] = useState("red");
    return (
        <div className="d-flex flex-column align-items-center">
            <div style={{ width: "8px", height: "60px", backgroundColor: "#212529" }}></div>

            <div className="semáforo col p-3 mb-5 bg-dark rounded mx-auto" style={{ width: "120px" }}>
                <div
                    className="rounded-circle bg-danger mx-auto mb-2"
                    style={{ width: "80px", height: "80px", opacity: color === "red" ? 1 : 0.3, cursor: "pointer" }}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className="rounded-circle bg-warning mx-auto mb-2"
                    style={{ width: "80px", height: "80px", opacity: color === "yellow" ? 1 : 0.3, cursor: "pointer" }}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className="rounded-circle bg-success mx-auto mb-2"
                    style={{ width: "80px", height: "80px", opacity: color === "green" ? 1 : 0.3, cursor: "pointer" }}
                    onClick={() => setColor("green")}
                ></div>
            </div>
        </div>
    );
}

export default Semáforo;