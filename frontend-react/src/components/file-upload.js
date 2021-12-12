import React, { Component } from 'react';
import axios from 'axios';

export default class UploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onImgChange = this.onImgChange.bind(this);
        this.onUpload = this.onUpload.bind(this);

        this.state = {
          imgCollection: ''
        }
    }

    onImgChange(event) {
        this.setState(
            { 
              imgCollection: [...this.state.imgCollection, ...event.target.files] 
            }
        )
    }

    onUpload(event) {
        event.preventDefault()
        let formData = new FormData();

        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        axios.post("http://localhost:8081/endpoint/multi-images-upload", formData, {
        }).then(response => {
            console.log((response.data))
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onUpload}>

                    
                    <div className="form-group">
                        <input className="form-control form-control-lg mb-3" type="file" multiple name="imgCollection" onChange={this.onImgChange} />
                    </div>

                    <div className="d-grid">
                        <button className="btn btn-danger" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}