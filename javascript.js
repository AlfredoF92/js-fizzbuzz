
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

let i = 0; 

for (i=1; i<=100; i++){

    if((i%5 === 0)&&(i%3 === 0)){ 
        console.log(i, "FizzBuzz (multiplo di 3 e 5)");
    }else if(i%3 === 0){
        console.log(i, "Fizz (multiplo di 3)");
    }else if(i%5 === 0){
        console.log(i, "Fizz (multiplo di 5)");
    }else console.log(i);
        
}