import { useEffect, useState } from "react"
import Papa from 'papaparse';

type Row = {
    Pregunta: string,
    Sí: number,
    No: number
}





export const SurveyTable = () => {



    const [data, setData] = useState("")
    const [csv, setCSV] = useState<string[][]>()

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("/aggregated_data.csv")
            const str = await res.text()
            setData(str)
        }

        getData()
    }, [])



    useEffect(() => {
        const parsed = Papa.parse(data, {
            header: false,
            skipEmptyLines: true,
            delimiter: ","
        })
        console.log(parsed.errors)
        setCSV(parsed.data as string[][])
        console.log(parsed.data)
    }, [data])




    return (
        <div >
            {csv?.length as number > 0 ?

                <table>
                    <thead>
                        <tr>
                            {csv?.[0].map((e, i) => { return <th key={i}>{e}</th> })}
                        </tr>
                    </thead>

                    <tbody>
                        {csv?.slice(1).map((e, i) => {

                            return (
                                <tr key={i}>
                                    {e.map((d, i) => <td key={i}>{d}</td>)}
                                </tr>
                            )

                        })}
                    </tbody>



                </table>

                :
                <></>
            }

        </div>
    )

}