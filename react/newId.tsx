let lastId = 0; //função para criar ids para tabela no DynamoDB

export default function() {
    lastId++;
    return lastId;
}
