import React from 'react';
import * as S from './Container.style';
import { useNavigate } from 'react-router-dom';

function Container({ props }) {
    const navigate=useNavigate();
    
    const onClickMovieItem=()=>{

        navigate(`/movie/${props.title}`,{
            state:props
        })
    }
  return (
    <div className="movie-container" onClick={onClickMovieItem}>
        <S.Table>
        <thead>
            <tr>
                <S.Td colSpan="2" height="0"> <S.Img src={props.poster_path} alt={props.title} />
            </S.Td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <S.Title className='title'>
                    {props.title||props.name}
                </S.Title>
                <S.Vote className='vote'>
               {props.vote_average}
                </S.Vote>
            </tr>
            </tbody>
        </S.Table>
    </div>
  );
}

export default Container;

