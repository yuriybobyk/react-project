import './Movie.css'

const Movie = ({movie}) => {

    const {title, id, poster_path, vote_average, genre_ids} = movie;

    const getPoster = `https://image.tmdb.org/t/p/w200${poster_path}`

    return (
        <div className={'movie'}>
            <h4>{title}</h4>
            <img className={'poster'} src={getPoster} alt={"title"}/>
        </div>
    );
};

export {Movie};