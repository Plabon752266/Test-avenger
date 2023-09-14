import { useEffect, useState } from "react";
import "./Home.css"
// eslint-disable-next-line react/prop-types
const Home = ({handleActor}) => {

    const [actors, setActors]=useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActors(data))
    }, []) 



    return (
        
        <div className="main-container flex justify-between">
            
            <div className="card-container grid grid-cols-3 gap-2 ml-2">
            {
                actors.map(actor => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={actor.id} className="card border-2 border-green-400 w-64 h-96 flex flex-col justify-center space-y-2">
                    <div className="justify-center mx-auto mb-4">

                        <img src={actor.image} alt="" className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 " />
                    </div>
                    <div className="text-white">

                        <h3 className="text-3xl text-bold">{actor.name}</h3>
                        <p>Country: {actor.country}</p>
                        <p>salary: {actor.salary} $</p>
                        <p>{actor.role}</p>
                       <button onClick={()=>handleActor(actor)} className="bg-green-600  p-2 rounded-lg mt-7">Select</button>
                    </div>
                </div>
                )
                    
                )
            }
            </div>
           
        </div>
    );
};

export default Home;