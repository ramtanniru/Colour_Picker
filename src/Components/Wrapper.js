import React,{useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Wrapper = () => {
    const colours = ["#FE0100","#03FF00","#0000FE","#FFFF00",
                    "#FF00FE","#03FFFF","#FEA500","#81017F","#FFC1CB","#008001",
                    "#FE6348","#00CED1","#8B4512","#FF8B00","#4682B4","#FED703"];
    const [Btnclr, setBtnclr] = useState("");
    const [visible, setVisible] = useState("hidden");
    return (
        <div className='container d-flex align-items-center justify-items-center py-5 h-75 card shadow rounded-3' 
        style={{backgroundColor:"#FFC1CB"}}>
             <div className='d-flex flex-row my-5'>
                {colours.map((a) => {
                    return(<div className='card shadow' style={{backgroundColor: String(a), height:75 , width:75, visibility:String(visible)}} 
                    onClick={()=>{setBtnclr(String(a));setVisible("hidden")}}>
                    </div>);
                   })
                }
             </div>
             <div>
                <button className='form-control btn btn-success' onClick={() => {setVisible("visible")}} style={{backgroundColor:String(Btnclr)}}>
                    Pick a color
                </button>
             </div>
        </div>
    );
}

export default Wrapper;