import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { AuthProvider } from './contexts/AuthContext.tsx'

//USER -> GAMES -> POSTS 

// EAI JOGOS
// SAVE MANUAL
// RESTART 
// NA SETINHA
// 


//FUNCIONALIDADE
// LIKE E DISLIKE
// BARRA DE PESQUISA
// SALVAR / FAVORITAR
// POST VIA URL (uuid v4)
// LIB TEXTO TO MARKDOWN (PESQUISAR)

//NICHO
/*
 USER = JOGADORES
POSTS = DICAS SOBRE JOGOS, FINAIS ALTERNATIVOS, SEGREDOS E COMENTARIOS
CATEGORY = JOGOS
*/

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;