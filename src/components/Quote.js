import quoteStyle from './Quote.module.css';

const Quote = () => (
  <div className={quoteStyle.quoteContainer}>
    <h1 className={quoteStyle.quoteTitle}>
      The only true wisdom is in knowing you know nothing.
      — Socrates,
    </h1>
  </div>
);

export default Quote;
