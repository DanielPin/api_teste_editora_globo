const moment = require('moment');

export const mockNoticias = [
  {
    _id: '624ca1342201feb7608fc7d9',
    titulo: 'teste',
    descricao: 'teste',
    dataDePublicacao: '05/04/2022',
    __v: 0,
  },
  {
    _id: '624ca24e5204c56c36aadbe3',
    titulo: 'teste2',
    descricao: 'teste2',
    dataDePublicacao: '05/04/2022',
    __v: 0,
  },
];

export const mockNoticia = {
  _id: '624ca1342201feb7608fc7d9',
  titulo: 'teste',
  descricao: 'teste',
  dataDePublicacao: moment().format('DD/MM/YYYY'),
  __v: 0,
};

export const mockCriarNoticia = {
  titulo: 'teste',
  descricao: 'teste',
  dataDePublicacao: moment().format('DD/MM/YYYY'),
};

export const mockCriarNoticiaComDataAnteriorAAtual = {
  titulo: 'teste',
  descricao: 'teste',
  dataDePublicacao: '06/01/2020',
};

export const mockCriarNoticiaComDataInvalida = {
  titulo: 'teste',
  descricao: 'teste',
  dataDePublicacao: '25/13/2020',
};
