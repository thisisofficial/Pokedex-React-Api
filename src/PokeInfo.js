import	 { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import React from 'react';
import { useParams} from 'react-router-dom';

export const PokeInfo = () =>{
    let {name } = useParams();
    const data = fetch('https://pokeapi.co/api/v2/pokemon/1/')


    return(
        <Container>
            <Row>
                <Col><h2>{name}</h2></Col>
            </Row>
            <Row>
                <Col><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"/></Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
        </Container>
    )
}