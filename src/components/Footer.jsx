import style from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={ style.footer }>
      <h1 className={ style.titleFooter }>Feito com React, usando o context API</h1>
      <h1 className={ style.titleFooter }>© Vinicius José</h1>
    </footer>
  );
}
