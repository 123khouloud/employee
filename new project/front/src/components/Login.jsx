import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import du fichier CSS

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Remplacez cette logique par la vérification réelle des informations d'identification
    if (username === 'user' && password === 'pass') {
      navigate('/home');
    } else {
      alert('Accès refusé. Veuillez vérifier vos informations d\'identification.');
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Se connecter</button>
      </div>
    </div>
  );
}

export default Login;
