import { useState } from "react";
import "./LikeButton.css"

const LikeButton = (props) => {
    const [likeButtonClass, setLikeButtonClass] = useState("fa fa-thumbs-up");

    function handleClick(){
        if(likeButtonClass === "fa fa-thumbs-up"){
            setLikeButtonClass("fa fa-thumbs-down");
        }
        else{
            setLikeButtonClass("fa fa-thumbs-up")
        }
    }
    return ( 
        <div>
            <button className={likeButtonClass} onClick={handleClick}></button>
        </div>
     );
}
 
export default LikeButton;