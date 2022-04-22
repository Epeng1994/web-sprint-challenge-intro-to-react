// Write your Character component here
import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components'


const kf = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`

const CharDiv = styled.div`
    height: 5vw;
    text-align: left;
    border: 2px solid green;
    font-size:2vw;
    color:white;
    display: flex;
    justify-content: space-between;
`

const CharSpan = styled.div`
    margin:1vw 1vw;
    background-color: rgb(229, 215, 78, .6);
    border-radius: 5px;
`
const InfoBar = styled.div`
    height: 12vw;
    text-align: center;
    display: flex;
    flex-flow:column;
    color: white;
    animation: ${kf} .7s;
`

const InfoP = styled.p`
    border:0;
    margin:0;
`


export default function(props){

    const [infoBar,setInfoBar] = useState(false)


    const infoBarOn = () =>{
        setInfoBar(!infoBar)
    }

    return(
        <div onClick = {()=> infoBarOn()}>
            <CharDiv onClick = {()=> infoBarOn()}>
                <p>{props.name}</p>
                <CharSpan>{props.birth}</CharSpan>
            </CharDiv>
            {infoBar ? <InfoBar>
                <InfoP>Height : {props.height} </InfoP>
                <InfoP>Mass: {props.mass}</InfoP>
                <InfoP>Hair Color: {props.hair}</InfoP>
                <InfoP>Gender: {props.gender}</InfoP>
                <InfoP>Skin Color: {props.skin}</InfoP>
                <InfoP>Eye Color: {props.eye}</InfoP>
            </InfoBar> :null}
        </div>
    )
}