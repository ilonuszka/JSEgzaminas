/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.querySelector("#output");

    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => printResults(data));
    output.textContent = '';

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
            width: "200px",
            boxShadow: "0px 0px 8px 1px #000000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        })
        
        const brand = document.createElement('p');
        Object.assign(brand.style, {
            borderRadius: "5px",
            margin:"5px",
            fontSize: '1em',
            fontWeight: '800'
        })
        brand.textContent = item.brand;
        console.log(item.brand);
        card.append(brand);

        const models = document.createElement("div");
        Object.assign(models.style, {
            borderRadius: "3px",
            margin:"5px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
        })

        item.models.forEach(model=>{
            const modelSpan = document.createElement("span");
            modelSpan.textContent = model;
            Object.assign(modelSpan.style, {
                borderRadius: "5px",
                margin:"0px 5px 0px 5px",
                padding: "2px",
                fontSize: '0.5em',
                fontWeight: '400',
                margin: "1px",
                border: "black solid 1px"
            })
            models.append(modelSpan);
        })
        card.append(models);

        output.append(card);
    })
}