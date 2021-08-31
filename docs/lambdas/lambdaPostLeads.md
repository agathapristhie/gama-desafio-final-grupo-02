const AWS = require ('aws-sdk')
 
let dynamodb = new AWS.DynamoDB.DocumentClient(); 
let date = new Date(); 
let now = date.toISOString()
let status = "";
let dados = "";
let tableName = 'leadsDesafioFinalHiringCoders';

exports.handler = async (event) => { 
    let name = event.name; 
    let email = event.email; 
    let phone = event.phone; 
    let params = { 
        TableName: tableName, 
        Item: { 
        'name': name, 
        'email': email, 
        'phone': phone, 
        'date': now,
        'client': false
        },
        Key:{ //chave necessária para alterar ou deletar um item
        'email': email
        },
    }; 
    
    await dynamodb.put(params).promise();
    status = "O cadastro de lead foi criado com sucesso!"

    const response = { 
            statusCode: 200, 
            body: {
                status
            }
    };
    return response;
}
