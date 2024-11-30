export interface Pet {
  id?: string;
  image: string;
  name: string;
  age: number;
  weight: number;
  raza: string;
  especie: 'perro' | 'gato';
  vacuna: boolean; 
  esterilizado: boolean;
  proximaVisita: string; // Fecha en formato de texto, por ejemplo, "YYYY-MM-DD"
}