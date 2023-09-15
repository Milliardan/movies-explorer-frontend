import classNames from 'classnames';
import './Article.css';

function Article({ title, navId, isThemed = false, isPadding = false, children }) {
  return (
    <section
      className={classNames('article', { section: !isPadding }, { article_themed: isThemed }, { article_padding: isPadding })}
      {...(navId ? { id: navId } : {})}
    >
      <h2 className={classNames('article__title', { 'article__line': title === 'Технологии' })}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Article;
