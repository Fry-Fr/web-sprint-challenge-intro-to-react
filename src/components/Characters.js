import React from 'react'
import styled from 'styled-components'

const Chars = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(159, 179, 179, .35);
    border-radius: 5rem;
    width: 75%;
    margin: 3rem 0;
    padding: 2rem 0;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // cursor: pointer;
        text-align: left;
        background: rgba(179, 179, 179, .5);
        border: .5px dashed black;
        border-radius: .5rem;
        padding: 0 .75rem;
        margin: .5rem .75rem;
        width: 85%;
        &:hover {
            background-color: rgba(0, 230, 30, .65);
        }
        p {
            font-weight: bold;
        }
        span {
            font-weight: bold;
            cursor: pointer;
            float: right;
            margin-right: 1.5rem;
            background: rgb(179, 179, 179);
            border-radius: .5rem;
            padding: .25rem;
            &:hover {
                background-color: rgba(0, 190, 30, .65);
        }
    }
`

const Characters = (props) => {

    const {charsObj, getDetails} = props

    return (
        <Chars>
            {charsObj.map( (charObj,i) => {
                return (
                <div key={i} onClick={(event)=>getDetails(event,charObj)}>
                    <p>{charObj.name}</p>
                    <span>+</span>
                </div>
                )
            })}
        </Chars>
    )    
}

export default Characters