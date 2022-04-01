import React from 'react'

export function PokeCard(props) {
    const {id, name,height,weight,sprite,types} = props;
  return (
    <>
        <div className='contain contain_info'>
            <div className='spriteCont'>
                <div className='titleCont'>
                    <p className='smallText'>{id}</p>
                    <p className='emphasis'>{name}</p>
                </div>
                <div className='extrasCont'>
                    <p className='text'>Weight: {weight} lb</p>
                    <p className='text'>Height: {height} inch</p>
                </div>
            </div>
            
            <div className='spriteCont'>
                <img className='sprite' src={sprite}/>
            </div>
            <div className='typesCont'>
                {types}
            </div>
            
        </div>
    </>
  )
}


