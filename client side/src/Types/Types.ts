

export interface IBook {
  _id: string; 
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  publishedYear?: number;
  publisher?: string;
  copies: number;
  available: boolean;
  createdAt?: string;
  updatedAt?: string;
}
