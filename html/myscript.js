//usa il while


//const numero = [];  //array vuoto

//let somma = 0 ;
//collega all'arrey con input per far mettere  dei numeri 

//for (let i = 0 ; i < 50 ; i++) {
  // perche lo fatto con il for quando devo usare il while
//}

//while( numero > 50) {

//}

console.log("Numeri inseriti:", numeri);

console.log("Somma degli elementi:", risultato);




const numeri = [];

let risultato = 0;

while (risultato <= 50) {

  const numero = parseInt(prompt("Inserisci un numero:"));
  
  numeri.push(numero);

  risultato = numeri.reduce((acc, curr) => acc + curr, 0);

} //if a ripensarci e inutile perche e gia impostato sopra lazzione da fare



//per fare dal bottone e input il pront devo fare il cliks