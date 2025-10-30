let textJS = document.getElementById("textJS");
let output = "";
for(let i=1;i<=100;i++)//in alterantiiva posso usare anche for(let i=1;i<101;i++)
    {
        
        //controllo se il numero è multiplo di 3 e 5 tramite l'operatore modulo %, il resto della divisione
        if(i%3==0 && i%5==0)//avviene prima la condizione più restrittiva
        {
            output="fizzbuzz";
            console.log(output);
        }
        else if(i%3==0)
        {
            output="fizz";
            console.log(output);
        }
        else if(i%5==0)
        {
            output="buzz";
            console.log(output);
        }
        else {
            output=i;
            console.log(output);
        }
        //stampo nell'html aggiungendo l'ultimo valore calcolato a capo ad ogni iterazione
        textJS.innerHTML += output + "<br>";
    }
    
    