import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCel, setCel } from '../reducers/slices/celebritySlices';
import '../style/Home.css'
const Celebrities_List = ({ celebrities }) => {
    const dispatch = useDispatch();
    const {celebrities_List} = useSelector(state => state.cel)
    function handleAdd(celid){
        const celebrity = celebrities.find(c => c.birthday === celid);
        if(celebrities_List.find(c => c.birthday === celid)){
            dispatch(removeCel(celid));
        }else{
            dispatch(setCel(celebrity));
        }
        console.log(celebrity);
    }


    return (
        <div class="card">
            <h3 class="text-center"> Lista de Celebridades</h3>
            <div class="card-body ">
                {celebrities.map(c => {
                    return (
                        <div class="border border-success-subtle rounded ">
                            <h4 class="card-title text-center ">{c.name}</h4>
                            <h2 class="card-text text-center ">{c.age}</h2>
                            <div class="card-text text-center ">{c.occupation}</div>
                            <button type="button" class="btn btn2 btn-outline-light d-flex justify-content-center" onClick={()=> handleAdd(c.birthday)}> Agregar a Celebridades Favoritas</button>

                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Celebrities_List
