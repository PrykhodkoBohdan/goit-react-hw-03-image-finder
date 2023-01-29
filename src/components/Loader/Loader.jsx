import React from "react";
import { Triangle } from "react-loader-spinner";
import style from '../style/styles.module.css'


const Loader = () => {
  return (
<div className={style.Loader}>
<Triangle
  height="800"
  width="800"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>

</div>

  )}

  export default Loader;