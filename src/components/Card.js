import { CirclePlus, CircleMinus } from "lucide-react"

export default function Card({score, increaseScore, decreaseScore, teamName, winner}){
    const isWinner = winner === teamName;

    return (
        <div className="md:w-1/3 w-full bg-slate-200 h-auto border-2 border-slate-600 border-dashed rounded-lg shadow-lg">
            <h2 className="text-center text-slate-700 font-bold text-xl border-2 border-b-slate-300 py-[10px]">
                {teamName} {isWinner? "🏆" : ""}
            </h2>

            <p className="md:text-8xl text-5xl py-7 text-center text-slate-700 ">{score}</p>

            {winner ? null :
                (<div className="flex justify-around text-slate-700 pt-[10px] pb-10 ">
                    <CircleMinus 
                        size={40}
                        onClick={decreaseScore}
                    />
                    <CirclePlus 
                        size={40} 
                        onClick={increaseScore}
                    />
                </div>)
            }
        </div>
    )
}