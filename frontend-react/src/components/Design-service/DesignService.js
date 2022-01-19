import React, { Component } from 'react';
import axios from "axios";
import FadeIn from "react-fade-in/lib/FadeIn";
import DesignServicePicture from "./DesignServicePicture";
import History from "../../components/History";

export default class DesignService extends Component {

    constructor(props) {
        super(props);

        this.onImgChange = this.onImgChange.bind(this);
        this.onUpload = this.onUpload.bind(this);

        this.state = {
          ID: null,
          selectedCollageID: this.props.SelfDesignSelectedCollage.id,
          title: this.props.SelfDesignSelectedCollage.title,
          imgCollection: '',
          collageDescription: '',
          summary: null,
          Selectvalue: "A4",
          frame: "Puudub",
          framePrice: 0,
          selectionPrice: this.props.SelfDesignSelectedCollage.price,
          error: null
        }
    }

    onImgChange(event) {
        this.setState(
            { 
              imgCollection: [...this.state.imgCollection, ...event.target.files] 
            }
        );
    }

    divstatus = (e) =>{
        e.preventDefault();
        this.setState({Selectvalue: e.target.value});
    };

    FrameStatus = (e) =>{
        e.preventDefault();
        this.setState({frame: e.target.value});
    };

    onClick = () =>{
        if(this.state.frame === "Puudub"){
            this.setState({framePrice: 0})
        }else if(this.state.Selectvalue === "A4" && (this.state.frame === "Must" || this.state.frame === "Valge" || this.state.frame === "Kuldne")){
            this.setState({framePrice: 1.49})
        }else{
            this.setState({framePrice: 2.49})
        }

        if(this.state.Selectvalue === "A4"){
            this.setState({
                selectionPrice: this.props.SelfDesignSelectedCollage.price
            });
        }else if(this.state.Selectvalue === "A3"){
            this.setState({
                selectionPrice: this.props.SelfDesignSelectedCollage.A3price
            });
        }
    }

    updateInputValue(evt) {
        this.setState({
            collageDescription: evt.target.value
        });
      }

    onUpload(event) {
        if(this.state.imgCollection && this.state.collageDescription){
            event.preventDefault()
            let formData = new FormData();

            for (const key of Object.keys(this.state.imgCollection)) {
                formData.append('imgCollection', this.state.imgCollection[key])
            }
            axios.post("http://localhost:8081/endpoint/multi-images-upload", formData, {
            }).then(response => {
                var ResponseData = ((response.data));

                this.setState({ID: ResponseData.img_userCreated._id});

                //Send to storage
                for (var i = 0; i < 20; i++) {
                    const Item = "Product" + i;
                    const output = localStorage.getItem(Item);
        
                    if(output === null){
                        delete this.state.imgCollection;
                        delete this.state.selectionPrice; 
                        delete this.state.error;

                        localStorage.setItem(Item, JSON.stringify(this.state));
                        i = 20; //End for
        
                        //Send to Checkout
                        History.push('/tellimus');
                    }
                }
            })
        }else{
            this.setState({error: "Palun kontrollige et kõik andmed ja pildid on sisestatud!"})
        }
    }

    render(){
        
        //Arvutame summat ilma setStateita, et vältida järjekorda sattumist. Ma tean et see on technically mutating, aga mul pole praegu paremat lahendust.
        if(this.state.Selectvalue === "A4"){
            /*eslint-disable-next-line*/
            this.state.summary = this.props.SelfDesignSelectedCollage.price + this.state.framePrice;
        }else if(this.state.Selectvalue === "A3"){
            /*eslint-disable-next-line*/
            this.state.summary = this.props.SelfDesignSelectedCollage.A3price + this.state.framePrice;
        }

        return(
            <div>
                <FadeIn>
                <div className="left-designservice">
                    <DesignServicePicture SelectedProduct={this.props.SelectedProduct}/>
                </div>

                <div className="right-designservice">
                    
                        <h1 id="header">Kujundusteenus:</h1>
                        <p id="header" style={{fontSize: "24px", fontWeight: "500", marginTop: "36px"}}>Palun laadige üles pildid mis lähevad kollaaži peale</p>
                        
                        <div className="center">
                            <input className="form-control form-control-lg mb-3" type="file" multiple name="imgCollection" onChange={this.onImgChange} />
                        </div>

                        <h2 id="header" style={{fontSize: "24px", fontWeight: "500", marginTop: "64px"}}>Palun kirjeldage soovitud kollaaži</h2>

                        <div className="center">
                            <textarea rows="8" cols="80" type="text" placeholder="Palun kirjeldage teie soovitud kollaaži siin..." style={{marginTop: "16px", resize: "none"}} value={this.state.value} onChange={evt => this.updateInputValue(evt)}></textarea>
                        </div>

                        <h3 style={{textAlign: "center", marginBottom: "8px"}}>Kollaaži suurus</h3>

                        <div className="center">
                            <select id="dropdown" onChange={this.divstatus} onClick={this.onClick}>
                                <option value="A4" defaultValue>A4 (21x30cm)</option>
                                <option value="A3">A3 (30x40cm) (+{this.props.SelfDesignSelectedCollage.A3price - this.props.SelfDesignSelectedCollage.price}€)</option>
                            </select>
                        </div>

                        <h3 style={{textAlign: "center", marginBottom: "8px"}}>Kollaaži raam</h3>

                        <div className="center">
                            <select id="dropdown" onChange={this.FrameStatus} onClick={this.onClick}>
                                <option value="Puudub" defaultValue>Puudub</option>
                                <option value="Must">Must</option>
                                <option value="Must">Valge</option>
                                <option value="Must">Kuldne</option>
                            </select>
                        </div>

                        <div className="summary">
                            <h3 style={{marginBottom: "8px", marginTop: "16px"}}>Kokku:</h3>

                            <p id="price">Kollaaži suurus: {this.state.selectionPrice}€</p>
                            <p id="price">Kollaaži raam: {this.state.framePrice}€</p>
                            <hr id="price-underline" />
                            <p id="price">Kokku: {parseFloat(this.state.summary).toFixed(2)}€</p>
                        </div>

                        <div className='summary' style={{marginTop: "16px"}}>
                            <p style={{color: "red"}}>{this.state.error}</p>
                        </div>
                        
                        <div className="center">
                            <button id="button" onClick={this.onUpload} style={{marginTop: "16px"}}>Edasi</button>
                        </div>  
                    </div>
                </FadeIn>
            </div>
        )
    }
}