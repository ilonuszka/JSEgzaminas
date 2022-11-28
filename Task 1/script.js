/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const output = document.querySelector("#output");

form.addEventListener('submit', evt=>{
    evt.preventDefault();
    const kg= Number(evt.target.search.value);
    const lb = kg * 2.2046;
    const grams = kg / 0.0010000;
    const oz = kg * 35.274;

    Object.assign(output.style, {
        maxWidth: "80%",
        margin: "50px auto",
        fontSize: '1.2em',
        fontWeight: '800'
    })

    output.textContent = '';

    const textOutput = document.createElement('p');
    textOutput.textContent = `${String(kg)} kg after conversion will be:`;
    output.append(textOutput);

    const lbOutput = document.createElement('p');
    lbOutput.style.color = 'red';
    lbOutput.textContent = String(lb) + ' lb';
    output.append(lbOutput);
    
    const gOutput = document.createElement('p');
    gOutput.style.color = 'blue';
    gOutput.textContent = String(grams) + ' g';
    output.append(gOutput);
    
    const ozOutput = document.createElement('p');
    ozOutput.style.color = 'green';
    ozOutput.textContent = String(oz) + '  oz';
    output.append(ozOutput);
})