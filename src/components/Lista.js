import React from "react";

const Characters = ({ characters }) => {
    return (
        <div className="row">
            <h1>Primer Componente</h1>
            {
                        <div className="list">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope='col'> ID </th>
                                        <th scope='col'> Nombre </th>
                                        <th scope='col'> Genero </th>
                                        <th scope='col'> Especie </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {characters.map((item, index) => {
                        return (
                            <tr>
                                <td scope='row'>{index}</td>
                                <td scope='row'>{item.name}</td>
                                <td scope='row'>{item.gender}</td>
                                <td scope='row'>{item.species}</td>
                              
                            </tr>
                        )
                     })}
                                </tbody>
                            </table>


                        </div>
                   
                

            }
        </div>

    )

}

export default Characters 