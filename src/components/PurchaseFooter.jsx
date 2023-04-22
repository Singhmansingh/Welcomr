import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

export function PurchaseFooter(props){
    const [liked, setLiked] = useState(false);
    return (
        <div className="floating-footer">
            <div className="like">

                {
                    liked ?
                    <button onClick={()=>{setLiked(!liked)}} className="like-btn shadow liked"><FontAwesomeIcon icon={faHeart}/></button>
                    :
                    <button onClick={()=>{setLiked(!liked)}} className="like-btn shadow"><FontAwesomeIcon icon={emptyHeart}/></button>

                }
                
            </div>
            <div className="purchase">
                <a className="btn purchase-btn shadow" href="#tickets">Purchase</a>
            </div>
        </div>
    )
}