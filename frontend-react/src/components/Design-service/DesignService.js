import React, { useState, useRef, Component } from 'react';
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
          selectedCollage: props.SelectedProduct,
          imgCollection: '',
          collageDescription: '',
          summary: "",
          Selectvalue: "A4",
          frame: "Puudub",
          framePrice: 0,
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

    onClickSize = () =>{
        if(this.state.Selectvalue === "A4"){
            this.setState({summary: this.props.SelfDesignSelectedCollage.price + this.state.framePrice});
        }else if(this.state.Selectvalue === "A3"){
            this.setState({summary: this.props.SelfDesignSelectedCollage.A3price + this.state.framePrice});
        }
    }

    onClickFrame = () =>{
        if(this.state.frame === "Puudub"){
            this.setState({framePrice: 0})
        }else if(this.frame === "A4"){
            this.setState({framePrice: 1.49})
        }else{
            this.setState({framePrice: 2.49})
        }

        this.onClickSize();
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

                        localStorage.setItem(Item, JSON.stringify(this.state));
                        i = 20; //End for
        
                        //Send to Checkout
                        History.push('/tellimus');
                    }
                }
            })
        }
    }

    render(){
        return(
            <div>
                <FadeIn>
                <div className="left-designservice" style={{width: "45%", display: "block", marginRight: "auto", marginTop: "64px", marginLeft: "96px"}}>
                    <DesignServicePicture SelectedProduct={this.props.SelectedProduct}/>
                </div>

                <div className="right-designservice">
                    
                        <h1 id="header">Kujundusteenus:</h1>
                        <p id="header" style={{fontSize: "24px", fontWeight: "500", marginTop: "36px"}}>Palun laadige üles pildid mis lähevad kollaaži peale</p>
                        
                        <div id="TEMP">
                            <input className="form-control form-control-lg mb-3" type="file" multiple name="imgCollection" onChange={this.onImgChange} />
                        </div>

                        <h2 id="header" style={{fontSize: "24px", fontWeight: "500", marginTop: "64px"}}>Palun kirjeldage soovitud kollaaži</h2>

                        <div id="TEMP">
                            <textarea id="TEMP" rows="8" cols="80" type="text" style={{marginTop: "16px"}} value={this.state.value} required onChange={evt => this.updateInputValue(evt)}></textarea>
                        </div>

                        <h3 style={{textAlign: "center", marginBottom: "8px"}}>Kollaaži suurus</h3>

                        <div id="TEMP">
                            <select id="dropdown" onChange={this.divstatus} onClick={this.onClickSize}>
                                <option value="A4" defaultValue>A4 (21x30cm)</option>
                                <option value="A3">A3 (30x40cm)</option>
                            </select>
                        </div>

                        <h3 style={{textAlign: "center", marginBottom: "8px"}}>Kollaaži raam</h3>

                        <div id="TEMP">
                            <select id="dropdown" onChange={this.FrameStatus} onClick={this.onClickFrame}>
                                <option value="Puudub" defaultValue>Puudub</option>
                                <option value="Must">Must</option>
                                <option value="Must">Valge</option>
                                <option value="Must">Kuldne</option>
                            </select>
                        </div>

                        <div id="TEMP">
                            <button id="button" onClick={this.onUpload} style={{marginTop: "64px"}}>Edasi</button>
                        </div>  
                </div>
                </FadeIn>
            </div>
        )
    }
}