import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
<main id="main-content">

  <header>
    <h1>My Quizz</h1>
    <p>
      Pour accéder à la page /about 
      <a href="about/">Cliquez ici</a>
    </p>
  </header>

  <nav class="topnav" aria-label="Réseaux sociaux">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost"></a>
          <a href="#" class="fa fa-skype"></a>
          <a href="#" class="fa fa-android"></a>
          <a href="#" class="fa fa-dribbble"></a>
          <a href="#" class="fa fa-vimeo"></a>
          <a href="#" class="fa fa-tumblr"></a>
          <a href="#" class="fa fa-vine"></a>
          <a href="#" class="fa fa-foursquare"></a>
          <a href="#" class="fa fa-stumbleupon"></a>
          <a href="#" class="fa fa-flickr"></a>
          <a href="#" class="fa fa-yahoo"></a>
          <a href="#" class="fa fa-reddit"></a>
          <a href="#" class="fa fa-rss"></a>
  </nav>

  <section class="row">
    <section class="leftcolumn">
      <article class="card">
        <h2>Nom étudiant</h2>
        <p>Description</p>

        <section id="quiz">
          <h3>A TOI DE JOUER</h3>
          <div id="question"></div>
          <div id="proposals"></div>
        </section>

      </article>
    </section>

    <aside class="rightcolumn">
      <div class="card">
        <img 
          src="/question.gif" 
          alt="Illustration représentant un point d'interrogation"
          width="500"
          height="600"
        >
      </div>
    </aside>
  </section>

  <footer>
    <p>@2024</p>
  </footer>

</main>
`;

initQuizz();