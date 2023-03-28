

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const customerId = event.pathParameters.customerId;
    const customer = {'curtomerId': customerId, 'customerName': 'Customer ' + curtomerId};
    const reponse = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*",
        },
        body: JSON.stringify(customer),
    }
    return reponse;
};
