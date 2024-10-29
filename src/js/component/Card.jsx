import React from "react";

const Cartas = () => {
    return (
        <div className="col-12 col-md-3 d- justify-content-center mt-3">
            <div className="card" style={{ width: "18rem;" }}>
                <img src="https://images.unsplash.com/photo-1727946443877-f6dcad028e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit dolore quia ipsum corrupti aperiam ea. Sequi corrupti expedita aliquid quisquam, error consequuntur. Nesciunt repudiandae magni dolorem ducimus tempore, assumenda eos!</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )
}
export default Cartas;