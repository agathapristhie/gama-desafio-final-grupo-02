const AWS = require ('aws-sdk')
 
let dynamodb = new AWS.DynamoDB.DocumentClient(); 
let dados = "";
let tableName = 'leadsDesafioFinalHiringCoders';

exports.handler = async () => {
    let params = {
        TableName: tableName,
    };
    
    let consulta = await dynamodb.scan(params).promise();
    dados = consulta.Items;
   
    const response = { 
            statusCode: 200, 
            body: {
                dados
            }
    };
    return response;
}
