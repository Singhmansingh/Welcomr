import { useState } from "react"

export function PurchaseFooter(props){
    const [liked, setLiked] = useState(false);
    return (
        <div className="floating-footer">
            <div className="like">
                <button onClick={()=>{setLiked(!liked)}} className={"like-btn shadow " + ( liked ? 'liked' : "")}>♥</button>
            </div>
            <div className="purchase">
                <button className="purchase-btn shadow">Purchase</button>
            </div>
        </div>
    )
}