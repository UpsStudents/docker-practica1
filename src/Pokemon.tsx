import { url } from "inspector"
import { useEffect, useState } from "react"

export interface PokemonProps {
    url: string
    name: string
}

export const Pokemon: React.FC<PokemonProps> = ({ url, name }) => {
    const [image, setImage] = useState("");
    useEffect(() => {
        const result = fetch(url).then(resp => resp.json()).then(poke => {
            setImage(poke.sprites.front_shiny)
        })
    }, []);
    return <div>
        <h3>{name}</h3>
        <img src={image} alt="" />
    </div>
}