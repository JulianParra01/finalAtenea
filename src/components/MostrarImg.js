import React from "react";

  const Imagenes = ({ characters }) => {
    return (
        
        <div className="row">
                   <h1>Segundo Componente - Mostrar Img</h1>
            {
                characters.map((item, index) => (

                    <div key={index} className="col">
                     
                        <div className="list">
         
                        <img src={item.image}/>
                                    
                        </div>
                       
                    </div>
                  
                ))
            }
        </div>
    )
}

export default Imagenes