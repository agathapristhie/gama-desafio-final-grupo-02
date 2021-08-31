import axios , {AxiosResponse} from 'axios'

let getOrder = () => {

  //instancia um objeto Headers
  let myHeaders = new Headers();
  //adiciona o Content-Type ao objeto
  myHeaders.append("Content-Type", "application/json");
  //utiliza o pacote de utilidades 'built-in' do JSON para transformar um objeto numa string e armazenas numa variável
  //cria um objeto JSON com os parâmetros para chamar a api
  axios.get(`https://hiringcoders202102.myvtex.com/api/oms/pvt/orders?_stats`, { // vtex API
  headers: {
   'X-VTEX-API-AppKey': 'vtexappkey-hiringcoders202102-OEMONM',
   'X-VTEX-API-AppToken': 'KGFUSNJYXABFOBAVMSRCNIRDMYVHIJBWGRGCEHHBWHXBJKQVRGNPDUACPCITRCQOZFYWUXRELQFFKQTBHZQCWLSMQENCZNJURJBELTBTOIENOVSZIGMSMORNMMGQKPEX'
 }
})
    .then ((response: AxiosResponse<any>) => (response.data))
    .catch((error: AxiosResponse <any>) => console.log('error', error))


}

export default getOrder;

