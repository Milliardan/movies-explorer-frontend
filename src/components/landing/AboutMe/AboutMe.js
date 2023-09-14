import './AboutMe.css';
import photo from '../../../images/student-photo.jpg';

function AboutMe() {
  return (
    <article className="about-me">
      <img className="about-me__photo" src={photo} alt="Фотография Дениса" />
      <div className="about-me__description">
        <h3 className="about-me__name">Денис</h3>
        <p className="about-me__subtitle">Фронтенд-разработчик, 33&nbsp;года</p>
        <p className="about-me__text">
        Как фронтенд-разработчик, я сочетаю технические навыки с креативностью. 
        Мое увлечение - создание удивительных веб-приложений, которые не только функциональны, но и красочно оформлены.
        Каждый проект для меня как искусство, где я могу выразить свои идеи и вдохновение через код. 
        </p>
        <ul className="about-me__link-list">
          <li className="about-me__link-list-item">
            <a href="https://github.com/Milliardan" className="about-me__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default AboutMe;
