import './MoviesCard.css';
import CardButton from '../CardButton/CardButton';
import React from 'react';

// Функция для форматирования длительности фильма
const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
};

function MoviesCard({ name, duration, thumbnail, type }) {
  const [isSaved, setIsSaved] = React.useState(false);

  function handleClickSave() {
    setIsSaved((state) => !state);
  }

  const ref = React.useRef();

  function handleClickDelete() {
    setIsSaved(false);
    ref.current.remove();
  }

  return (
    <li className="movie-card" ref={ref}>
      <h3 className="movie-card__name">{name}</h3>
      <p className="movie-card__duration">{formatDuration(duration)}</p>
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className="movie-card__thumbnail"
      />

      {type === 'all' ? (
        isSaved ? (
          <CardButton
            className="movie-card__button"
            type="done"
            onClick={handleClickSave}
          />
        ) : (
          <CardButton
            className="movie-card__button"
            type="save"
            onClick={handleClickSave}
          />
        )
      ) : (
        <CardButton
          className="movie-card__button"
          type="delete"
          onClick={handleClickDelete}
        />
      )}
    </li>
  );
}

export default MoviesCard;
