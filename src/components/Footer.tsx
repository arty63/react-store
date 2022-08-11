export function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <a className='footer__git' href='https://github.com/arty63'>
          <img
            src='../assets/icons/GitHub.png'
            alt='git'
          />
        </a>
        <p className='footer__year'>© Rolling Scopes School, 2022</p>
        <a className='footer__logo' href='https://rs.school/js/'>
          <img src='https://rs.school/images/rs_school_js.svg' alt='rss' />
        </a>
      </div>
    </footer>
  );
}
