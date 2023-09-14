import AboutProject from '../AboutProject/AboutProject';
import AuthLinks from '../../common/AuthLinks/AuthLinks';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import Promo from '../Promo/Promo';
import Student from '../Student/Student';
import Techs from '../../landing/Techs/Techs';

function Landing() {
  return (
    <>
      <Header isThemed={true}>
        <AuthLinks />
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <Student className="section__common" />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
