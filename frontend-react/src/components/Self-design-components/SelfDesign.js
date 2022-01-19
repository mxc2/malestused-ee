import "./SelfDesign.css";

import React, { Component } from 'react';
import History from "../History";
import { withSize } from 'react-sizeme'
import GridLayout from "./GridLayout"

class Selfdesign extends Component{

    constructor(props) {
        super(props);
        this.state = {
            ID: 0,
            selectedCollageID: this.props.SelfDesignSelectedCollage.id, 
            title: this.props.SelfDesignSelectedCollage.title,
            value: "A4",
            price: this.props.SelfDesignSelectedCollage.price,
            frame: 0,
            summary: "",
        }

        const layout = this.generateLayout();
        //this.state = { layout };
    }

    //Generate random id for collage when page loads
    componentDidMount(){
        console.log(this.state);
        const min = 1;
        const max = 999999;
        const rand = min + Math.random() * (max - min);
        this.setState({ ID: rand });
    }

    //See what is selected in select
    divstatus = (e) =>{
        e.preventDefault();
        this.setState({value: e.target.value});
    };

    onClick = () =>{
        if(this.state.value === "A4"){
            this.setState({price: this.props.SelfDesignSelectedCollage.price});
            if(this.state.frame !== 0){
                this.setFramePrice();
            }else{
                this.removeFramePrice();
            }
        }else if(this.state.value === "A3"){
            this.setState({price: this.props.SelfDesignSelectedCollage.A3price});
            if(this.state.frame !== 0){
                this.setFramePrice();
            }else{
                this.removeFramePrice();
            }
        }
    }

    setFramePrice = () =>{
        if (this.state.value === "A4"){
            this.setState({frame: 1.49});
        }else if (this.state.value === "A3"){
            this.setState({frame: 2.49});
        }
    };

    removeFramePrice = () =>{
        this.setState({frame: 0});
    }

    //Write edited collage details to local storage
    sendToStorage = () => {

        //This allows us to write into storage without deleting previous products
        for (var i = 0; i < 20; i++) {
            const Item = "Product" + i;
            const output = localStorage.getItem(Item);

            console.log("run");

            if(output === null){
                localStorage.setItem(Item, JSON.stringify(this.state));
                i = 20; //End for

                //Send to Checkout
                History.push('/tellimus');
            }
        }
      };
    
    render(){

        //Calculate the collage size and frame together. Why is this unde render()? Because we need to rerender it quickly
        this.state.summary = this.state.frame + this.props.SelfDesignSelectedCollage.price;
        
        return(
        <div className="self-design">
            <div className="left">
                <GridLayout/>
            </div> 

            <div className="right">
                <div>
                    <h3 style={{textAlign: "center"}}>Pildid</h3>
                </div>

                <div style={{marginTop: "300px"}}>
                    <h3 style={{textAlign: "center", marginBottom: "8px"}}>Kollaaži suurus</h3>
                    <select id="dropdown" onChange={this.divstatus} onClick={this.onClick}>
                        <option value="A4" defaultValue>A4 (21x30cm)</option>
                        <option value="A3">A3 (30x40cm)</option>
                    </select>
                </div>

                <div>
                    <h3 style={{textAlign: "center", marginBottom: "8px"}}>Kollaaži valikud</h3>
                    <button className="new-button" onClick={this.onSize}>Genereeri uus kollaaž</button>
                </div>

                <div className="test2">
                    <h3 style={{textAlign: "center", marginBottom: "8px"}}>Kollaaži raam</h3>
                    <div className="collage-frames">
                        <button className="frame-button" id="left-button" onClick={this.removeFramePrice}>Puudub</button>
                        <button className="frame-button" id="right-button" onClick={this.setFramePrice}>Must</button>
                    </div>
                    <div className="collage-frames">
                        <button className="frame-button" id="right-button" onClick={this.setFramePrice}>Valge</button>
                        <button className="frame-button" id="right-button" onClick={this.setFramePrice}>Kuldne</button>
                    </div>
                </div>

                <hr />

                <div className="summary">
                    <h3 style={{marginBottom: "8px"}}>Kokku:</h3>

                    <p id="price">Kollaaži suurus: {this.state.price}€</p>
                    <p id="price">Kollaaži raam: {this.state.frame}€</p>
                    <hr id="price-underline" />
                    <p id="price">Kokku: {parseFloat(this.state.summary).toFixed(2)}€</p>
                </div>

                <div className="center-buy" style={{marginTop: "24px"}}>
                    <button id="button" onClick={this.sendToStorage}>Osta</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Selfdesign;