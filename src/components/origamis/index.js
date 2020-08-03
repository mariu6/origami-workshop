
import React, { Component } from 'react';
import styles from './index.module.css';
import Origami from "../origami";

class Origamis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origamis: []            // инициализирам масив за данните, които ще фетчна
        }
    }

    getOriagmis = async () => {
        const { length } = this.props;
        const promise = await (await fetch(`http://localhost:9999/api/origami?length=${length}`));    // фетчвам асинхронно (имам cors()) защото работя с окален сървър, нищо че той ползва клауд
        const origamis = await promise.json();
        this.setState({
            origamis                // сетвам данните 
        })
    }

    renderOrigamis() {
        const { origamis } = this.state;
        console.log(origamis);
        return origamis.map((origami, index) => {
            return (
                <Origami key={origami._id} index={index} {...origami} />
            )
        })
    }

    componentDidMount() {
        this.getOriagmis();         // при готова страница извиквам фетча
    }

    render() {
        return (
            <div className={styles.posts}>
                {this.renderOrigamis()}
            </div>
        )
    }
}

export default Origamis;
