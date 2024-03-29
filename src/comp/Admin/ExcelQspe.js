import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Papa from "papaparse";
import { addCollTabQuestionsSpe, visibleExcelQspe } from '../../lib/redux/actions';



const ExcelQspe = ({idEv, nomEv}) => {

    const [file, setFile] = useState();
    //--------------------
    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    }
    //--------------------
    const dispatch = useDispatch();
    //----------------------------
    //CSV TO JSON :
    const[CSVdata, setCSVdata]= useState();
    //----------------------------
  useEffect(()=>{
    if(CSVdata){ 
dispatch(addCollTabQuestionsSpe(idEv,CSVdata));
alert("La liste de questions spécifiques à l'évènement "+nomEv+" a été ajoutée à la base de donnée.");
dispatch(visibleExcelQspe(false));
    }
  },[CSVdata]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(file){
           console.log('on convertit');
            Papa.parse(file, {
                delimiter:";", header:true, download:true, complete:(result)=>{setCSVdata(result.data);}
            })

          
        }
    }

    return (
        <div className='excel'>
            <header>
                <h3>IMPORTER UN FICHIER EXCEL CONTENANT LA LISTE DE QUESTIONS SPECIFIQUES</h3>
            </header>

            <button className='retour' onClick={()=>dispatch(visibleExcelQspe(false))}>Annuler et retourner à la liste de questions spécifiques</button>

            <form>
                <input
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleOnChange}
                />

                <button
                    onClick={(e) => {
                        handleOnSubmit(e);
                    }}
                >
                    IMPORTER CE FICHIER EXCEL.CSV
                </button>
            </form>

        </div>
    )
}

export default ExcelQspe