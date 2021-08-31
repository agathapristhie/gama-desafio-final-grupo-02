//função que utiliza o metodo get na api do Glauber, retorna Leads que não são clientes

export default function getLeadsAPI(){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return fetch('https://ai5g9kf6e5.execute-api.sa-east-1.amazonaws.com/beta/leads', {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }).then(response => response.json())
        .catch(error => console.error(error));
}
    
