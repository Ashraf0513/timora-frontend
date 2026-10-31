import {RotateCcw} from "lucide-react";
import { WatchContext } from "./watchcontext";
import { useContext } from "react";

function Filter() {
    const {filters,handleCheck,straps,handleStrap,minprice,maxprice,setmaxprice}=useContext(WatchContext)

    function clear(){
        window.location.reload()
    }

    return (<>
        <div className="Filter-main">
            <div className="Filter-title">
                <h3>Filters</h3>
                <div className="Filter-underline"></div>
            </div>

            <div className="Category">
                <h4 className="Category-title">Category</h4>
                <div className="Category-checkbox">
                    <input type="checkbox" id="classic" checked={filters.includes("Classic")} onChange={()=>handleCheck("Classic")}></input>
                    <label htmlFor="classic" >
                        Classic
                    </label>
                </div>

                <div className="Category-checkbox">
                    <input type="checkbox" id="sport" checked={filters.includes("Sport")} onChange={()=>handleCheck("Sport")}/>
                    <label htmlFor="sport" >
                        Sport
                    </label>
                </div>

                <div className="Category-checkbox">
                    <input type="checkbox" id="modern" checked={filters.includes("Modern")} onChange={()=>handleCheck("Modern")}/>
                    <label htmlFor="modern" >
                        Modern
                    </label>
                </div>

                <div className="Category-checkbox">
                    <input type="checkbox" id="luxury" checked={filters.includes("Luxury")} onChange={()=>handleCheck("Luxury")}></input>
                    <label htmlFor="luxury" >
                        Luxury
                    </label>
                </div>

                <div className="Category-underline"></div>
            </div>


            <div className="Pricerange-main">
                <h4 className="Pricerange-title">Up to ₹{maxprice.toLocaleString("en-IN")}</h4>
                <input className="Pricerange" type="range" id="pricerange" min={0} max={30000} step={500} value={maxprice} onChange={(event)=>setmaxprice(Number(event.target.value))}></input>
                
            </div>
            <div className="Pricerange-underline"></div>


            <div className="Strap">
                <h4 className="Strap-title">Strap Type</h4>
                <div className="Strap-checkbox" >
                    <input type="checkbox" id="metal" checked={straps.includes("Metal")} onChange={()=>handleStrap("Metal")}></input>
                    <label htmlFor="metal" >
                        Metal
                    </label>
                </div>

                <div className="Strap-checkbox">
                    <input type="checkbox" id="leather" checked={straps.includes("Leather")} onChange={()=>handleStrap("Leather")}></input>
                    <label htmlFor="leather" >
                        Leather
                    </label>
                </div>

                <div className="Strap-checkbox">
                    <input type="checkbox" id="rubber" checked={straps.includes("Rubber")} onChange={()=>handleStrap("Rubber")}></input>
                    <label htmlFor="rubber" >
                        Rubber
                    </label>
                </div>

                <div className="Strap-checkbox">
                    <input type="checkbox" id="nylon" checked={straps.includes("Nylon")} onChange={()=>handleStrap("Nylon")}></input>
                    <label htmlFor="nylon" >
                        Nylon
                    </label>
                </div>

                <div className="Strap-underline"></div>
            </div>


            
            <button className="ClearFilter-btn" onClick={clear}><RotateCcw size={15}/>Clear Filter</button>
        </div>
    </>)
}
export default Filter