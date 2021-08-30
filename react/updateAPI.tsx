//função que transforma o propect/lead em client, tem como parâmetro o id de um cadastro
let updateAPI = (id:number) => {

  //instancia um objeto Headers
  let myHeaders = new Headers();
  //adiciona o Content-Type ao objeto
  myHeaders.append("Content-Type", "application/json");
  //utiliza o pacote de utilidades 'built-in' do JSON para transformar um objeto numa string e armazenas numa variável
  let raw = JSON.stringify({"id": id, "operation": "update"});
  //cria um objeto JSON com os parâmetros para chamar a api
    //chamada da api com estes parâmetros e utilização de 'promises' para obter uma resposta
    fetch("https://gq1s38c8la.execute-api.sa-east-1.amazonaws.com/dev", { // AWS API Gateway criada para esse cadastro
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
    .then (response => response.text())
    .catch(error => console.log('error', error));


}

export default updateAPI;
