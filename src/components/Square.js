import React from 'react'

export default function Square({mw,ss}) {
    console.log(mw,ss);
    return (
        <div>
            {
                mw - ss > 0 ? 
                <div style = {{width : mw + "px", height : mw+"px" , border :"2px solid black", margin : "5%"}}>
                    <Square mw = {mw-ss}  ss = {ss}  />
                </div> 
                
                :

                <div >
                
                </div>
        
            }
        </div>
    )
}
