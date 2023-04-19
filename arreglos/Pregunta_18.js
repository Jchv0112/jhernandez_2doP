let num =[17,19,21];
var puntaje_total =0;

for (let numeros of num) {
    pares (numeros);
    impares (numeros);
    siete (numeros);

}
console.log (puntaje_total);


function pares (num) {
    if (num%2 ===0)
    {
        puntaje_total+=2;

    }
}
function impares (num){
    if (num%2 != 0  && num!=7)
    {
        puntaje_total++;
    }
}
function siete (num)
{
    if (num === 7)
    {
        puntaje_total+=3;
    }
}
