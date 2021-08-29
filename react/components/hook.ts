let myHeadersVtex = new Headers();
myHeadersVtex.append("Content-Type", "application/json");
myHeadersVtex.append("Accept", "application/json");
myHeadersVtex.append("X-VTEX-API-AppKey", "vtexappkey-hiringcoders202102-OEMONM");
myHeadersVtex.append("X-VTEX-API-AppToken", "KGFUSNJYXABFOBAVMSRCNIRDMYVHIJBWGRGCEHHBWHXBJKQVRGNPDUACPCITRCQOZFYWUXRELQFFKQTBHZQCWLSMQENCZNJURJBELTBTOIENOVSZIGMSMORNMMGQKPEX");


let ordersAPIteste = (email:String) => {
     //chamada da api com estes parâmetros e utilização de 'promises' para obter uma resposta
    fetch(`https://hiringcoders2021.myvtex.com/api/oms/pvt/orders?clientEmail=${email}`, { // Orders Hook
      method: 'GET',
      headers: myHeadersVtex,
      redirect: 'follow'
    })
    .then (response => response.text())
    .catch(error => console.log('error', error));

}

export default ordersAPIteste;






