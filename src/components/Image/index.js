import React  from "react"
import "./image.css"

export default function Image({src,alt,className,handleChangeImage,url}){
    
    return (
        <div className={className}>
            <img onClick= {handleChangeImage}src={src} alt={alt} url={url}></img>
        </div>
    )
}