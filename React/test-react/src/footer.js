
function Footer () {
    return (
        <footer class="footer">
        <div class="footer__columns">
          <div class="footer__column_content-copyright">
            <div class="logo logo_place-footer">Практическая</div>
            <p class="footer__author">&copy Молчанов Дмитрий</p>
          </div>
          <div class="footer__column_content-info">
            <p class="column__heading">О Практикуме</p>
            <div class="footer__column-links">
              <a class="footer__column-link" href='#'>
                Главная
              </a>
              <a class="footer__column-link" href='#'>
                Концепция
              </a>
              <a class="footer__column-link" href='#'>
                Наставники
              </a>
            </div>

          </div>
          <div class="footer__column_content-social">
            <p class="column__heading">Соцсети</p>
            <div class="footer__column-links">
              <a class="footer__column-link" href='#'>
                <img src="../first_practic/images/youtube_color_white.svg" alt="youtube" class="footer__social-icon" />
                YouTube
              </a>
              <a class="footer__column-link" href='#'>
                <img src="../first_practic/images/vk_color_white.svg" alt="vk" class="footer__social-icon" />
                ВКонтакте
              </a>
              <a class="footer__column-link" href='#'>
                <img src="../first_practic/images/tiktok_color_white.svg" alt="tiktok" class="footer__social-icon" />
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;