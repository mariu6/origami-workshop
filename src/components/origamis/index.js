import React, { Component } from "react";
import styles from "./index.module.css";
import Origami from "../origami";

class Origamis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origamis: []            // инициализирам масив за данните, които ще фетчна
        }
    }

    getOriagmis = async () => {
        const promise = await (await fetch("http://localhost:9999/api/origami"));    // фетчвам асинхронно (имам cors()) защото работя с окален сървър, нищо че той ползва клауд
        const origamis = await promise.json();
        this.setState({
            origamis                // сетвам данните 
        })
    }

    renderOrigamis(){
        const { origamis } = this.state;
        console.log(origamis);
        return origamis.map((origami) => {
            return (
                <Origami key={origami._id} {...origami}  />
            )
        })
    }

    componentDidMount() {
        this.getOriagmis();         // при готова страница извиквам фетча
    }

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Origamis</h1>
                <div className={styles.posts}>
                    {this.renderOrigamis()}
                </div>
            </div>
        )
    }
}

export default Origamis;
