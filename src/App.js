import React, { Component } from 'react';
import { Container, Head, Titulo, BemVindo } from './styles';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Head>
          <Titulo>Projeto Styled</Titulo>
        </Head>
        <BemVindo cor="00FF00" tamanho={15}>
          Bem vindo ao sistema
        </BemVindo>
      </Container>
    );
  }
}

export default App;


/*
  <div className="container">
    <header className="header">
      <a className="titulo">Projeto Styled</a>
    </header>
    <h1>Bem vindo ao sistema!</h1>
  </div>
*/