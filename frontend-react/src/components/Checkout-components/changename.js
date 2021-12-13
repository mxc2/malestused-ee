import "./changename.css"

function changename(){
    return(
        <div className="user-details">
            <h3 style={{textAlign: "center"}}>Tellija andmed:</h3>
            <div className="row-input">
                <div className="col-25">
                    <label for="first-name">Eesnimi:</label>
                </div>
                <div className="col-75">
                    <input type="text" id="first-name"></input>
                </div>
            </div>
            <div className="row-input">
                <div className="col-25">
                    <label for="first-name">Perekonna nimi:</label>
                </div>
                <div className="col-75">
                    <input  type="text" id="first-name"></input>
                </div>
            </div>
            <div className="row-input">
                <div className="col-25">
                    <label for="first-name">Email:</label>
                </div>
                <div className="col-75">
                    <input  type="text" id="first-name"></input>
                </div>
            </div>
            <div className="row-input">
                <div className="col-25">
                    <label for="first-name">Telefon:</label>
                </div>
                <div className="col-75">
                    <input  type="text" id="first-name"></input>
                </div>
            </div>
        </div>
    );
}

export default changename;