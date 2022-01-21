function Order(props){
    
    var Timestamp = props.time;

    return(
        <div>
            <table style={{width: "85%"}}>
                <thead>
                    <tr>
                        <th>Kollaaži nimi</th>
                        <th>Suurus</th>
                        <th>Raam</th>
                        <th>Transpordi firma</th>
                        <th>Pakiautomaadi aadress</th>
                        <th>Tellimuse aeg</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th style={{fontWeight: "500"}}>{props.title}</th>
                        <th style={{fontWeight: "500"}}>{props.size}</th>
                        <th style={{fontWeight: "500"}}>{props.frame}</th>
                        <th style={{fontWeight: "500"}}>{props.transCo}</th>
                        <th style={{fontWeight: "500"}}>{props.location}</th>
                        <th style={{fontWeight: "500"}}>{Timestamp.slice(0, 10)}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Order;