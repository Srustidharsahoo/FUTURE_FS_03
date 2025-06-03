import { catagory_items } from "../food"
import '../css/catagory.css'
import { useNavigate } from "react-router-dom";


export const Catagory = () => {
    const navigate = useNavigate();

    const handleItem = (categoryPath) => {
        navigate(`/${categoryPath.toLowerCase()}`);
    };


    return(
        <>
            <div className="catagory-main-section">
                <h2>Catagory Section</h2>
                <div className="catagory-section">
                    {catagory_items.map((cur,id)=>{

                        return(
                            <>
                                <div key={cur.id} className="catagory-box" onClick={() => handleItem(cur.name)}>

                                    <div className="img-section">
                                        <img key={id} src={cur.food_image} alt="" />
                                    </div>
                                
                                    <div className="img-name">
                                        <p>{cur.food_name}</p>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    );
};