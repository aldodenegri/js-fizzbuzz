let textJS = document.getElementById("textJS");
let output = "";
let outputReverse = "";
for (let i = 1, j = 100; i <= 100 && j >= 0; i++, j--)//in alterantiiva posso usare anche for(let i=1;i<101;i++)
{
    //la logica dei cotrolli per i e per j devono essere separate altrimenti si sovrascrivono a vicenda e non ottengo il controllo desierato
    //controllo se il numero è multiplo di 3 e 5 tramite l'operatore modulo %, il resto della divisione sia per i che per j
    if (i % 3 == 0 && i % 5 == 0) output = "fizzbuzz";
    else if (i % 3 == 0) output = "fizz";
    else if (i % 5 == 0) output = "buzz";
    else output = i;

    if (j % 3 == 0 && j % 5 == 0) outputReverse = "fizzbuzz";
    else if (j % 3 == 0) outputReverse = "fizz";
    else if (j % 5 == 0) outputReverse = "buzz";
    else outputReverse = j;
    //stampo nell'html aggiungendo l'ultimo valore calcolato a capo ad ogni iterazione
    textJS.innerHTML +=
        `<div class="row">
            <div class="col-6">
                <span>${output}</span>
            </div>`
        +
        `<div class="col-6 d-flex justify-content-end">
                <span>${outputReverse}</span>
            </div>
        </div>`;
    console.log(output + " - " + outputReverse);
}

