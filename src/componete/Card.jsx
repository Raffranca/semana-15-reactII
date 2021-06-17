import React, {useState, useEffect} from 'react';



const Card = ()=>{
    const [personagens, setPersonagem] = useState([])
    
    useEffect(()=>{
        const pega = async () => {
            const resposta = await fetch('https://anapioficeandfire.com/api/characters')
            const dados = await resposta.json()
            //console.log(dados)
            setPersonagem(dados)
            //console.log(dados)

        }
        pega()    
    },[])

    return(
        <ul>
            <li>alguma coisa</li>
        </ul>
    )


}

export default Card;


