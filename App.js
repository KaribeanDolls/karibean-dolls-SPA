import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="app">
      <header className="site-header">
        <h1 className="site-title">Karibean Dolls</h1>
        <nav className="nav-buttons">
          <button onClick={() => setPage('home')}>Accueil</button>
          <button onClick={() => setPage('products')}>Produits</button>
          <button onClick={() => setPage('lookbook')}>Lookbook</button>
          <button onClick={() => setPage('contact')}>Contact</button>
          <button onClick={() => setPage('vip')}>VIP</button>
        </nav>
      </header>
      <main>
        {page === 'home' && (
          <>
            <p className="intro">Explore ton univers baddie tropical et Y2K.</p>
            <button className="glitter-button">Clique-moi pour du glitter ✨</button>
            <img src="/karibean-girl.png" alt="Karibean Dolls" className="karibean-image" />
            <p className="radio-heading">Karibean Dolls Radio — Bad B*tch Mood Only</p>
            <p className="radio-note">Pas connectée ? Tu n’entendras que des extraits...</p>
            <a
              href="https://open.spotify.com/playlist/62BC7JgoITYro9zhVQw3oD"
              target="_blank"
              rel="noreferrer"
              className="spotify-button"
            >
              Écouter la playlist complète sur Spotify
            </a>
            <div className="spotify-player">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/62BC7JgoITYro9zhVQw3oD?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <p className="footer-note">© 2025 Karibean Dolls. Playlist intégrée via Spotify – tous droits réservés aux artistes.</p>
          </>
        )}
        {page === 'products' && <h2 className="page-placeholder">Produits à venir...</h2>}
        {page === 'lookbook' && <h2 className="page-placeholder">Lookbook à venir...</h2>}
        {page === 'contact' && <h2 className="page-placeholder">Contact à venir...</h2>}
        {page === 'vip' && <h2 className="page-placeholder">Section VIP à venir...</h2>}
      </main>
    </div>
  );
}
export default App;
