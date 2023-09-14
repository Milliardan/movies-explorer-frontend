import './Student.css';
import Article from '../Article/Article';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Student() {
  return (
    <Article title="Студент" isPadding={true}>
      <AboutMe />
      <Portfolio />
    </Article>
  );
}

export default Student;
