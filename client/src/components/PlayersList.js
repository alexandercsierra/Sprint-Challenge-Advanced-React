import React, {useState} from 'react'
import styled from 'styled-components'
import useDarkMode from '../hooks/useDarkMode'

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

const H1 = styled.h1`
    margin-top: 0;
    padding-top: 2%;
`;

const PlayersList = (props) => {
    const [darkMode, setDarkMode] = useDarkMode(props.darkMode);
    const toggleDarkMode = (e) => {
        
        e.preventDefault();
        setDarkMode(!darkMode);
        console.log(darkMode);
      }
    
    return(
        <div>
            <H1>Players in the Women's World Cup</H1>
                <button onClick={toggleDarkMode}>{props.isDarkMode}</button>
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