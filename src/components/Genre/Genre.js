import {useNavigate} from "react-router-dom";

const Genre = ({genre: {id, name}}) => {



    const navigate = useNavigate();


    return (
        <div>
            <button className={'genre_button'} onClick={()=>{
                navigate(`genres/${name.toLowerCase()}?page=1`, {state: id})
            }}>{name}</button>
        </div>
    );
};

export {Genre};