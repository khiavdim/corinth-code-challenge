import React from 'react';
import { LoadingOutlined, StarFilled, VideoCameraFilled } from '@ant-design/icons';

function Content (props) {

    console.log(props)

    //Remove Duplicates in Films and Starships Arrays
    const tempFilms = Array.from(new Set(props.films));
    const tempStarships = Array.from(new Set(props.starships));

    return (
        <div className="flex m-5 max-h-full overflow-scroll">
            <div className="w-1/2 flex justify-between items-center over"><div className="text-black font-['Arial'] text-6xl uppercase text-ellipsis ... ">{props.character.name}</div></div>
            <div className="w-1/2">
                {props.isLoading
                    ? <LoadingOutlined className="text-blue" style={{ fontSize: '100px'}}/>
                    :
                    <div className="mr-3 ml-3 overflow-scroll">
                        <div className="mb-2">
                            <span className="text-orange text-xl font-semibold">Height:</span>
                            <div className="text-white">{props.character.height}</div>
                        </div>
                        <div className="mb-2">
                        <span className="text-orange text-xl font-semibold">Mass:</span>
                            <div className="text-white">{props.character.mass}</div>
                        </div>
                        <div className="mb-2">
                            <span className="text-orange text-xl font-semibold">Hair Color:</span>
                            <div className="text-white">{props.character.hair_color}</div>
                        </div>
                        <div className="mb-2">
                            <span className="text-orange text-xl font-semibold">Birth Year:</span>  
                            <div className="text-white">{props.character.birth_year}</div>
                        </div>
                        <div className="mb-2">
                            <span className="text-orange text-xl font-semibold">Species:</span>
                            <div className="text-white">{props.species}</div>
                        </div>
                        <div className="mb-2">
                            <span className="text-orange text-xl font-semibold">Films Appeared In:</span>
                            <div>{tempFilms.map((film, i) => {
                                return (
                                    <div key={i}>
                                        &emsp;<VideoCameraFilled size="small" className="text-yellow"/> <span className="text-white"> {film}</span>
                                    </div>
                                )
                            })}</div>
                        </div>
                        <div className="mb-2">
                            <span className="text-orange text-xl font-semibold">Starships Flown:</span>
                            <div>{tempStarships.map((starship, i) => {
                                return (
                                    <div key={i}>
                                        &emsp;<StarFilled size="small" className="text-yellow"/> <span className="text-white"> {starship}</span>
                                    </div>
                                )
                            })}</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Content ;