import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadMovies } from "./MovieListApi"


export const Dashboard = (props) => {
        const dispatcher = useDispatch ()
        useEffect(() => {
        dispatcher (loadMovies())
    }, [])
    return (<>
    <h1>Dashboard</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Shri_Virat_Kohli_for_Cricket%2C_in_a_glittering_ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_September_25%2C_2018_%28cropped%29.JPG"/> <br/>
    <img src="https://c.ndtvimg.com/2022-09/csj66om4_virat-kohli-afp_640x480_11_September_22.jpg"/>
         
         </>
         

        )
    
}