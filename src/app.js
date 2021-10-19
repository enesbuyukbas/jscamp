console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.20
}

console.log(dolarDun)

const euroDun = 11.20
//euroDun = 11 // HATALI KULLANIM

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konurKredileri = ["konut kredisi",
"Emlak konut kredisi","Taşıt kredisi"]

console.log("ul")
for(let i = 0; i<konurKredileri.length; i++){
    console.log("<li>"+i+"</li>")
}
console.log("/ul")
console.log(konutKredileri)