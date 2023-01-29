import React from "react";
import style from "../style/styles.module.css"

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({gallery, onClick}) => {
return(
    <>
<ul className={style.ImageGallery}>
 <ImageGalleryItem  gallery={gallery} onClick={onClick} />
</ul>
</>
)

}

export default ImageGallery;