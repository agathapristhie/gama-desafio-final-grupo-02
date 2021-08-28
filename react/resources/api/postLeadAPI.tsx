//função que utiliza o metodo post na api do Glauber, armazenando nova Lead no banco de dados
import { Lead } from '../../commons';

export default function postLeadsAPI(data: Lead) {
    let body = JSON.stringify(data);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    return fetch('https://ai5g9kf6e5.execute-api.sa-east-1.amazonaws.com/beta/leads', {
        method: 'POST',
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    }).then(response => response.json())
        .catch(error => console.error(error));
}

