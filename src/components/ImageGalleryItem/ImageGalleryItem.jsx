import React from "react";
import style from "../style/styles.module.css";

const ImageGalleryItem = ({gallery, onClick}) => {
 return gallery.map(({id, webformatURL, tags, largeImageURL}) => (
<li 
className={style.ImageGalleryItem} 
key={id} 
onClick={() => {onClick(largeImageURL, tags); }}>
    <img
     src={webformatURL}
     alt={tags}
    className={style.ImageGalleryItemImage}
    loading='lazy'
  />
</li>
 ))
}

export default ImageGalleryItem;