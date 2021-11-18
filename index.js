
// konekta knappen 
document.querySelector("button").addEventListener("click", budgetApp)

let incomeList = []; // skapa en låda/array för incz
function budgetApp(e) { // knappens funktion
    e.preventDefault() // förhindrar knappen att skicka iväg informationen
    //console.log("button works")

    // connecta option knappen 
    const option = document.querySelector("select");
    console.log(option.value)
    // lägg till value och det visar standard värde när du skriver console.log

    //pusha kostnader i inkomstLista
    // skapa if statements där du kopplar alla option values till
    if (option.value == "+") {

        const description = document.querySelector("#desc").value;
        // skapa en varibel för descripton när man väljer + 
        // value lägger man till för att få ut enskilda värdet som använderen skriver
        const value = document.querySelector("#value").value;
        // skapa en varibel för value när man väljer +
        //console.log(description)
        //console.log(value)
        incomeList.push(value) // Inputvalue pushar ut value från lådan/Arrayen incomeList 
        //console.log(incomeList) 
        const incomeDiv = document.querySelector(".income");
        // connectar diven h1 Income till + 
        //console.log(div)
        incomeDiv.innerHTML += `<li>${description} ${value}</li>`

    }

    if (option.value == "-") { // om option är = -

        const description = document.querySelector("#desc").value;
        // skapa en varibel för descripton när man väljer -
        const value = document.querySelector("#value").value;

        expenseList.push(value)  // Inputvalue pushar ut value från lådan/Arrayen incomeList 

        const expenseDiv = document.querySelector(".expenses");
        // connectar diven h2 expense till -
        expenseDiv.innerHTML += `<li>${description} ${value}</li>`

    }


    if (option.value == "choose") { // om option är = choose
        alert("Välj + eller -") 

        const divVinst = document.querySelector(".vinst");
        //en variabel som inte skriver ut uträkningen i body
        divVinst.innerHTML = ""; // skriver inget när man väljer choose

    }

    //Loopa igenom listorna och lagra totalt inkomst och kostnad
    var incomeSum = 0;
    for (var i = 0; i < incomeList.length; i++) {// skapa en forLoop i income list
        // console.log(incomeList[i]);
        incomeSum += Number(incomeList[i]);
    }

    var expenseSum = 0;
    for (var i = 0; i < expenseList.length; i++) {
        //console.log(expenseList[i]);
        expenseSum += Number(expenseList[i]);
    }

    // console.log(incomeSum, expenseSum,)

    const divProfit = document.querySelector("#profit");
    divProfit.textContent = incomeSum - expenseSum



}
