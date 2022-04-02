import React from 'react'

export function PokeCard({ pokemon }) {
    const { id, name, height, weight, sprites } = pokemon;
    const { front_default } = pokemon.length !== 0 ? sprites['other']['official-artwork'] : '';



    return (
        <>

            {pokemon.length !== 0 &&

                <div className='contain contain_info'>
                    <div className='spriteCont'>
                        <div className='titleCont'>
                            <p className='smallText'>{id}</p>
                            <p className='emphasis'>{name}</p>
                        </div>
                        <div className='extrasCont'>
                            <p className='pokemon'>Weight: {weight} lb</p>
                            <p className='smallText'>  |  </p>
                            <p className='pokemon'>Height: {height} inch</p>
                        </div>
                    </div>

                    <div className='spriteCont'>
                        <img className='sprite' src={front_default} />
                    </div>
                    <div className='typesCont'>
                        {/* {types} */}
                    </div>

                </div>

            }

        </>
    )
}


