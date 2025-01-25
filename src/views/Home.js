import Card from "../components/Card"
import { useEffect, useState } from "react";

export default function Home(){
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);

    useEffect(() => {
        if(scoreA<10 && scoreB<10){
            return;
        }
        if(scoreA==10){
            alert("Team A wins!");
        }
        if(scoreB==10){
            alert("Team B wins!");
        }
    }, [scoreA, scoreB]);

    return(
        <div className="bg-slate-300 min-h-screen p-10">
            <h1 className="text-center md:text-5xl text-3xl md:py-10 py-4 border-2 border-slate-600 border-dashed rounded-lg text-slate-700 bg-slate-200 font-bold">TallyTrack</h1>
            
            <div className="mt-[50px] flex md:flex-row flex-col gap-10 md:gap-0 justify-around">
                <Card name="Team A" />
                <Card name="Team B"/>
            </div>
            <button 
                className="py-2 px-10 bg-slate-600 text-white text-xl md:text-2xl rounded-lg font-bold m-auto block mt-10 shadow-lg hover:bg-slate-500 cursor-pointer" 
                onClick={()=>{
                    setScoreA(0);
                    setScoreB(0);
                }}
            >
                Reset
            </button>
        </div>
    )
}