const AWS = require ('aws-sdk')
 
let dynamodb = new AWS.DynamoDB.DocumentClient(); 
let date = new Date(); 
let now = date.toISOString()
let status = "";
let tableName = 'leadsDesafioFinalHiringCoders';

exports.handler = async (event) => { 
    let email = event.email; 
    let params = { 
        TableName: tableName, 
        Key:{ //chave necessária para alterar ou deletar um item
        'email': email
        },
    }; 
    
    await dynamodb.delete(params).promise();
    status = "A lead foi deletada com sucesso!"

    const response = { 
            statusCode: 200, 
            body: {
                status
            }
    };
    return response;
}