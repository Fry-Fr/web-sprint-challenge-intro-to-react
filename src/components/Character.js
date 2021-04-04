import React from 'react'
import styled from 'styled-components'

const CharacterCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    background-color: rgba(159, 179, 179, .35);
    border-radius: 5rem;
    width: 75%;
    margin: 3rem 0;
    padding: 0 5rem;
    h2 {
        text-decoration: underline;
    }
    p {
        font-weight: 550;
        margin: 0;
        padding: .5rem 0;
        &:last-child {
            margin-bottom: 1rem;
        }
    }
`

const Character = (props) => {
    const {data,getChars} = props
    const films = data.films.map(item=>{
        return '"' + item + '"'
    })

    return (
        <>
        <button type="button" onClick={(event)=> getChars(event)} style={{cursor:"pointer", background:"rgba(159, 179, 179, .75)"}}>back</button>
        <CharacterCard>
           <h2>{data.name}</h2>
           <p>films: {films.join(',')}</p>
           <p>height: {data.height}</p>
           <p>mass: {data.mass}</p>
           <p>hair color: {data.hair_color}</p>
           <p>skin color: {data.skin_color}</p>
           <p>eye color: {data.eye_color}</p>
        </CharacterCard>
        </>
    )
}

export default Character