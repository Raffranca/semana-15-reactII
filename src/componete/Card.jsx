import React, {useState, useEffect} from 'react';



const Card = ()=>{
    const [personagens, setPersonagem] = useState([])
    
    useEffect(()=>{
        const pega = async () => {
            const resposta = await fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50')
            const dados = await resposta.json()
            console.log(dados)
            setPersonagem(dados)
            

        }
        pega()    
    },[])

    return(
        <ul>
            {personagens.map(houses =>(
                <li key={houses.url}>{houses.name}
                    <li>{}</li>
                </li>
            ))}
        </ul>
    )


}

export default Card;


