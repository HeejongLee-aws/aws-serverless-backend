import AccountController from './controller/AccountController';


const tableName = process.env.SAMPLE_TABLE;
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

async function createArtist(artistId, concert, ticketSales){
    let params = {
        TableName:tableName,
        Item:{
        "ArtistId": artistId,
        "Concert": concert,
        "TicketSales": ticketSales
        }
    };

    console.log("param: ", params);
    const result = await docClient.put(params).promise();
}

async function getArtist(artistId, concert){
 
  let params = {
    TableName : tableName,
    Key: { "ArtistId": artistId , "Concert":concert},
  };

  const data = await docClient.get(params).promise();
  const item = data.Item;
 
  return item;
}

async function getConcertsByArtistId(artistId){
    var params = {
        TableName : tableName,
        KeyConditionExpression: "#artistId = :artistId",
        ExpressionAttributeNames:{
            "#artistId": "ArtistId"
        },
        ExpressionAttributeValues: {
            ":artistId": artistId
        }
    };

    console.log(params);
    const data = await docClient.query(params).promise();
    const items = data.Items;
    console.log(items);
    return items;
}

exports.lambdaHandler = async (event, context) => {
    console.info('received:', event);
    console.info('context:', context);
    let response = null;

    if( event.info.fieldName == 'createArtist' ){
        await createArtist(event.arguments.input.ArtistId, event.arguments.input.Concert, event.arguments.input.TicketSales)
        response =  event.arguments.input;

    }else if(event.info.fieldName == 'getArtist' ) {
        let item = await getArtist(event.arguments.input.ArtistId, event.arguments.input.Concert)
        response =  item;
    }else if(event.info.fieldName == 'getConcertsByArtistId' ) {
        let items = await getConcertsByArtistId(event.arguments.input.ArtistId)
        response =  items;
    }

    return response;
}

// export async function lambdaHandler(event, context) {
//     let accountController = new AccountController();

//     try {
//         if (event.httpMethod === 'POST' && event.path === '/accounts') {
//             response = accountController.createAccount(event);
//         } else if (event.httpMethod === 'GET' && event.path === '/accounts') {
//             response = accountController.listAccount(event);
//         }
//     } catch (err) {
//         console.log(err);
//         return err;
//     }

//     return response
// };
