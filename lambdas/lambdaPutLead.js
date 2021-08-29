const AWS = require ('aws-sdk')
 
let dynamodb = new AWS.DynamoDB.DocumentClient(); 
let date = new Date(); 
let clientDate = date.toISOString();
let status = "";
let tableName = 'leadsDesafioFinalHiringCoders';

exports.handler = async (event) => { 
    let email = event.email;
    
    let paramsUpdate = {
        TableName: tableName, 
        Key:{ 
            'email': email
        },
        UpdateExpression: 'set client = :true, clientDate = :clientDate',
        ExpressionAttributeValues: {
            ':true' : true,
            ':clientDate' : clientDate
        }   
    }; 
    
    await dynamodb.update(paramsUpdate).promise();
    return { 
            statusCode: 200, 
            body: {
                    status: "Atualização feita com sucesso"
            }
        };
}

