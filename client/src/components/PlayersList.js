import React from 'react'
import styled from 'styled-components'

const PlayerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;


const PlayerDiv = styled.div`
    border: 1px solid black;
    margin: 4% auto;
    width: 25%;
`;

const PlayersList = (props) => {
    return(
        <div>
            <h1>Players in the Women's World Cup</h1>
            <PlayerContainer>
            {props.players.map(player => {
                return <PlayerDiv>
                    <h3>{player.name}</h3>
                        <p>{player.country}</p>
                    </PlayerDiv>
            })}
        </PlayerContainer>
        </div>
        
    )
}

export default PlayersList