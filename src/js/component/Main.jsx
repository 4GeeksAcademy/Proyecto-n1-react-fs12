import React from "react";
import Jumbotron from "./Jumbotron";
import Cartas from "./Card";

const Main = () => {
    return (
        <div className="container mt-3">
            <Jumbotron/>
            <div className="row">
                <Cartas/>
                <Cartas/>
                <Cartas/>
                <Cartas/>
            </div>
        </div>
    )
}
export default Main;