import mongoose from 'mongoose';

export const NoticiasSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  dataDePublicacao: String,
});
