import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "01/06/2016",
    horario: "19hs",
  },
  casa: {
    nome: "Vasco",
  },
  visitante: {
    nome: "Flamengo",
  }
};

export default class App extends React.Component {
  render() {
    //return <PlacarContainer partida={dados.partida} casa={dados.casa} visitante={dados.visitante} />;
    return <PlacarContainer {...dados} />;
  }
}