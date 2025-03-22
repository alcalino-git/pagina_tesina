import {useEffect, useState} from "react"
import Papa from 'papaparse';

import {Chart as ChartJS} from "chart.js/auto"

import {Bar, Doughnut, Line} from "react-chartjs-2"


type Row = {
    Pregunta: string,
    Sí: number,
    No: number
}


export function SurveyChart() {
    const [data, setData] = useState("")
    const [csv, setCSV] = useState<Row[]>()

    useEffect(() =>{
        const getData = async () => {
            const res = await fetch("/aggregated_data.csv")
            const str = await res.text()
            setData(str)
        }

        getData()
    }, [])
    

    useEffect(() => {
        const parsed = Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
            delimiter: ","
        })
        console.log(parsed.errors)
        setCSV(parsed.data as Row[])
        console.log(parsed.data)
    }, [data])

    return <div style={{width: "90%"}}>

        {csv?.map((e,i) => {
            return <div style={{
                width: "100%", 
                height: "30vh", 
                marginBottom: "10vh", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                }}>
                <h4>{e.Pregunta}</h4>
                <Doughnut data={{
                    labels: ["Sí", "No"],
                    datasets:[{label: "Respuestas", data: [e.Sí, e.No]}]
                }}></Doughnut>
            </div>
        })}

    </div>
}