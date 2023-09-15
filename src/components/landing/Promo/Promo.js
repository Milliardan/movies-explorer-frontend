import './Promo.css';

function Promo() {

    // Функция для обработки нажатия кнопки и выполнения перехода
    const handleButtonClick = () => {
      // Получаем ссылку на секцию с идентификатором "about-project"
      const aboutProjectSection = document.querySelector('#about-project');
      
      // Проверяем, существует ли секция
      if (aboutProjectSection) {
        // Выполняем плавный скролл к секции
        aboutProjectSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <section className="promo section">
      <div className='promo__description'>
        <h1 className="promo__title">
          Учебный проект студента{'\n'} факультета{'\n'} Веб-разработки.
        </h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className='promo__more' onClick={handleButtonClick}>Узнать больше</button>
      </div>
      <div className='promo__background'></div>
    </section>
  );
}

export default Promo;
