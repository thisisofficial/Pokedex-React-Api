import React from 'react'

export function PokeCard(props) {
    const {id, name , weight, height, sprite, types} = props;

  return (
    <>
        <div className='contain'>
            <div className='titleCont'>
                <p className='smallText'>{id}</p>
                <p className='emphasis'>{name}</p>
            </div>
            <div className='spriteCont'>
                <img className='sprite' src={sprite}/>
            </div>
            <div className='typesCont'>
                {types}
            </div>
            <div className='extrasCont'>
                <p className='text'>{weight}</p>
                <p className='text'>{height}</p>
            </div>
        </div>
    </>
  )
}


