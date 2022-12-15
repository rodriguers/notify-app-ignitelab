/* eslint-disable prettier/prettier */
//Helper Function
//Pode receber duas tipagens
//##Tipagem original (Props)
//##Tipagem de replace (Props da tipagem original que serão substituídas)
export type Replace<T, R> = Omit<T, keyof R> & R;
