import React,{useEffect,useState}from "react"
import Image from "../Image"
import buttonImg from "./assets/arrowButton.svg"

import "./section.css"

export default function Section(){
    const [response,setResponse] = useState([])
    const [isLoaded,setIsLoaded]=useState(false)
    const [clickedNail,setClickedNail]=useState({})

    const url = "https://my-json-server.typicode.com/VitorHugoG/api-dados/dados"

    function handleChangeImage(event){
        setClickedNail({
            url :event.target.attributes.url.nodeValue,
            title : event.target.alt
        })
    }

    function handleRenderNails(response){
       return response.map((images,i)=>(<Image url={images.imgUrl} handleChangeImage={handleChangeImage}key= {i} src={images.thumb} alt={images.title} className="thumbnails"/> ));
    } 

    const handleLoadImages = async ()=>{
        const imageArr= await fetcher()
        await setResponse(imageArr)
        try{
            if(response!==[]){
                setIsLoaded(true)
                setClickedNail({url:response[0].imgUrl,title:response[0].title})
            }
        }catch{
            console.log("aguardando dados da requisição")
        }
    }
    const fetcher = async ()=>{
        const response = await fetch(url,{header:{"Content-type":"Application-json"}})
        const json = await response.json()
        return json
    }
    
    useEffect(()=>{
        handleLoadImages()
        
    },[isLoaded])


    return(
        <section>
                <div className="titleAndButtonContainer">
                    <div className="titleContainer">
                        <span>{clickedNail.title}</span>
                    </div>
                    <figure className="buttonContainer">
                        <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noopener noreferrer"><span>veja mais</span> <img src={buttonImg} width="14" alt="imagem de seta" /></a>
                    </figure>
                </div>
                <div className="bigImageContainer">
                        {isLoaded?<Image src={clickedNail.url} alt={clickedNail.title} className="bigImage"/>:<h1>carregando...</h1>}
                </div>
                <div className="thumbnailsContainer">
                        {isLoaded?handleRenderNails(response):<h3>carregando...</h3>}
                </div>
        </section>
    )
}