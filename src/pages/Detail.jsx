import { useLocation} from 'react-router-dom'

export default function MovieDetail() {
	
    const  {state}  = useLocation();

    console.log( state);

    return (
        <div className="page-container">
        <div style={{display:'flex'}}>
      <img 
      style={{width:"300px", height:"450px"}}
      src={state.poster_path}
       alt="영화포스터이미지" />
        
        <div
        style={{fontSize:"32px"}}>
            {state.title||state.name}
        </div>
        </div>
    </div>
				//~~~~~~전달 받은 값 활용하여 상세페이지 구성~~~~~~
    )
}
