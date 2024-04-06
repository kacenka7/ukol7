const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

 //Vypište do stránky všechna čísla.

 document.body.innerHTML += `<p> Výpis čísel:  ${numbers}</p>`

// Vypište do stránky druhé mocniny všech čísel.

document.body.innerHTML += "<p> Druhá mocnina: </p>"

numbers.forEach((prvek, nasobeni)=>{
    nasobeni = prvek * prvek
    document.body.innerHTML += nasobeni
    document.body.innerHTML += ", "
})


// Vypište do stránky pouze záporná čísla.

document.body.innerHTML += "<p> Záporná čísla: </p>"

numbers.forEach((prvek)=>{
    if (prvek < 0){

        document.body.innerHTML += prvek
        document.body.innerHTML += ", "
    
    }
 
})


// Vypište do stránky absolutní hodnotu všech čísel.

document.body.innerHTML += "<p> Absolutní hodnota: </p>"

numbers.forEach((prvek, abs)=>{
    if (prvek < 0){

        abs = (-1 * prvek)

        document.body.innerHTML += abs
        document.body.innerHTML += ", "
    }

    else{
        document.body.innerHTML += prvek
        document.body.innerHTML += ", "
    }
 
})

// Vypište do stránky pouze sudá čísla.


document.body.innerHTML += "<p> Sudá čísla: </p>"

numbers.forEach((prvek, abs)=>{
    if (prvek %2 === 0){


        document.body.innerHTML += prvek
        document.body.innerHTML += ", "
    }})



// Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

document.body.innerHTML += "<p> Absolutní hodnota je dělitelná třemi: </p>"

numbers.forEach((prvek)=>{

    if (prvek %3 === 0){


        document.body.innerHTML += prvek
        document.body.innerHTML += ", "
    }})


// Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.

document.body.innerHTML += "<p> Vzdálenost od 5: </p>"

numbers.forEach((prvek, vzdalenost)=>{


    if (prvek < 0){

        vzdalenost = -1*(prvek -5)

        document.body.innerHTML += `<p> Číslo ${prvek} je vzdálené ${vzdalenost} od čísla 5 </p>`
    }

    else{
        vzdalenost = (prvek -5)
        document.body.innerHTML += `<p> Číslo ${prvek} je vzdálené ${vzdalenost} od čísla 5 </p>`
    }


    })


// Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.

document.body.innerHTML += "<p> Druhé mocnicny vzdáleností všech čísel od čísla 5: </p>"

numbers.forEach((prvek, mocnina, vzdalenost)=>{

        vzdalenost = (prvek -5)
        mocnina = z = vzdalenost*vzdalenost

        document.body.innerHTML += `<p> Mocnina vzdálenosti čísla ${prvek} od čísla 5  je ${mocnina} </p>`

    })


// Spočítejte, kolik je v seznamu záporných čísel.

let pocet = 0;

numbers.forEach((prvek)=>{

    if (prvek<0){
    pocet = pocet+1

    }
    return pocet
    })

document.body.innerHTML += `Počet záporných čísel v seznamu je : ${pocet} </p>`

// Spočítejte součet všech čísel v poli.

let soucet = 0;

numbers.forEach((prvek)=>{

    
    soucet = soucet + prvek

    return soucet
    })

document.body.innerHTML += `Součet prvků v seznamu je : ${soucet} </p>`


// Spočítejte průměr všech čísel v poli.

const delka = numbers.length

console.log(delka)
const prumer = soucet/delka

document.body.innerHTML += `Průměr všech prvků je : ${prumer} </p>`

// Spočítejte součet všech kladných čísel v poli.

let soucetKladnych = 0;

numbers.forEach((prvek)=>{

    if (prvek>0){
    soucetKladnych = soucetKladnych+prvek

    }
    return soucetKladnych
    })

    document.body.innerHTML += `Součet všech kladných prvků je : ${soucetKladnych} </p>`