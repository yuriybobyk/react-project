import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Genre = ({genre: {id, name}}) => {



    const dispatch = useDispatch();

    const navigate = useNavigate();


    return (
        <div>
            <button onClick={()=>{
                navigate(`genres/${name.toLowerCase()}?page=1`, {state: id})
            }}>{name}</button>
        </div>
    );
};

export {Genre};