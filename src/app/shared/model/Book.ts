//Classe de modelo do livro
export interface Book {
  id:number;
  titulo: string;
  autor: string;
  classificacao: number;
  resenha: string;
  data_adicao: Date;
  imageUrl: string;
}
