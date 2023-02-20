import {imageURL} from "../../configs";

const Movie = ({movie}) => {

    const {title,backdrop_path,poster_path} = movie;
    return (
        <div>
            <h4>{title}</h4>
            <img src={`${imageURL}${poster_path}`} alt={title}/>
        </div>
    );
};

export {Movie};