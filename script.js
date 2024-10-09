const button = document.querySelector("#mybutton")
const euro = document.querySelector("#euro")

function convertValues(){
    const inputValue = document.querySelector(".input").value
    const realConverted = document.querySelector(".real")
    const dolarConverted = document.querySelector(".dolar-number")

    console.log(euro.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.07


    if(euro.value == "dolar") {
        dolarConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputValue / dolarToday)
    }

    if(euro.value == "euro"){
        dolarConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputValue / euroToday)
    }

    if(euro.value == "libra"){
        dolarConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP",
        }).format(inputValue / libraToday)
    }

    realConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputValue)
}

function changeCurrency() {
    const currencyChange = document.getElementById("currency-euro")
    const currencyImage = document.getElementById("currency-img")

    if (euro.value == "dolar") {
        currencyChange.innerHTML = "Dólar"
        currencyImage.src = "./img/dolar.png"
    }

    if (euro.value == "euro") {
        currencyChange.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }

    if (euro.value == "libra") {
        currencyChange.innerHTML = "Libra"
        currencyImage.src = "./img/libra.png"
    }

    convertValues()

}


euro.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)


