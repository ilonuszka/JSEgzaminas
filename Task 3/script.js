/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.querySelector("#btn");
const output = document.querySelector("#output");

button.addEventListener('click', evt => {
    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => printResults(data));
    output.textContent = '';
})

const printResults = data => {
    data.forEach(item=>{
        
        Object.assign(output.style,{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        })

        const card = document.createElement('div');
        Object.assign(card.style, {
            backgroundColor: "	#dcdcdc",
            borderRadius: "5px",
            margin:"5px",
            width: "120px",
            height: "150px",
            boxShadow: "0px 0px 8px 1px #000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        })
        
        const login = document.createElement('p');
        Object.assign(login.style, {
            borderRadius: "5px",
            margin:"5px",
            fontSize: '1em',
            fontWeight: '800'
        })
        login.textContent = item.login;
        card.append(login);

        const avatar = document.createElement("img");
        Object.assign(avatar.style, {
            borderRadius: "3px",
            margin:"5px",
            width: "100px",
            height: "100px",
        })
        avatar.src = item.avatar_url;
        card.append(avatar);

        output.append(card);
    })
}