const crypto = require('crypto')

module.exports = async function (context, req) {

    const name = (req.query.name || (req.body && req.body.name)); //Retrieving content from the request : Query parameter (GET) or inside the body (POST) 
    
    if (name) //Acting only if name is provided as a request parameter
    {
        context.bindings.RTFMCosmosDBItems = {id: crypto.randomUUID, name: name }; //Actual line to write data in the CosmosDB Collection 

        context.res ={ status : 200 } // Return the API Client all went well
    }
    else 
    {
        context.res ={ // if name is not provided, tell the API client to provide with one next time
            status : 400,
            body : "Pass a name in the query string or in the request body for the function to execute as expected."}
    }
}