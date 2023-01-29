import React from "react";
import style from "../style/styles.module.css"

const ButtonLoadMore = ({loader})=> {

return(
<button 
className={style.Button}
 onClick={() => loader()}>
    Load More
    </button>
)
};

export default ButtonLoadMore;