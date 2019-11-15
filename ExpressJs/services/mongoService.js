const util = require("util");
var mongoDB = require('mongodb');
const mongoClient = mongoDB.MongoClient;

mongoClient.connectAsync = util.promisify(mongoClient.connect);

const mongoDBUrl = "mongodb://localhost:27017";

function getMongoClient()
{
    return new Promise(
        async function onThen(resolve,reject)
        {
           try
           {
                var connectedClient = await mongoClient.connectAsync(
                    mongoDBUrl,
                    { 
                        useUnifiedTopology: true // To use the new Server Discover and Monitoring engine
                    }
                );

                resolve(connectedClient);
           }
           catch(ex)
           {
                reject("Error occured while connecting to MongoDB Server");
           }
        }
    );
}

function getDataFromCollection(dbName="",collectionName="",query={})
{
    return new Promise(
        async function onThen(resolve,reject)
        {
            var connectedMongoClient = null;
            
            try
            {
                connectedMongoClient = await getMongoClient();
                        
                const db = connectedMongoClient.db(dbName);
                
                var collection = db.collection(collectionName);
                
                var data = await collection.find(query).toArray();
                
                resolve(data);
            }
            catch(ex)
            {
                console.log(ex);
                reject("Error occured while fetching data from server");
            }
            finally
            {
                if(connectedMongoClient !== null)
                {
                    connectedMongoClient.close();
                }
            }
        }
    );
}

function addDataToCollection(dbName="",collectionName="",data)
{
    return new Promise(
        async function onThen(resolve,reject)
        {
            var connectedMongoClient = null;
            
            try
            {
                connectedMongoClient = await getMongoClient();
                        
                const db = connectedMongoClient.db(dbName);
                
                var collection = db.collection(collectionName);
                
                var result = await collection.insert(data);
                
                //resolve(result); // this will return complete object

                resolve(result.ops[0]);
            }
            catch(ex)
            {
                console.log(ex);
                reject("Error occured while inserting a new document to a collection");
            }
            finally
            {
                if(connectedMongoClient !== null)
                {
                    connectedMongoClient.close();
                }
            }
        }
    );
}

function updateDataIntoCollection(dbName="",collectionName="",id,data)
{
    return new Promise(
        async function onThen(resolve,reject)
        {
            var connectedMongoClient = null;
            
            try
            {
                connectedMongoClient = await getMongoClient();
                        
                const db = connectedMongoClient.db(dbName);
                
                var collection = db.collection(collectionName);
                
                var response = await collection.update(
                    {
                        _id : mongoDB.ObjectID(id)   
                    },
                    data
                );
                
                resolve();
            }
            catch(ex)
            {
                console.log(ex);
                reject("Error occured while inserting a new document to a collection");
            }
            finally
            {
                if(connectedMongoClient !== null)
                {
                    connectedMongoClient.close();
                }
            }
        }
    );
}

function deleteDataFromCollection(dbName="",collectionName="",id)
{
    return new Promise(
        async function onThen(resolve,reject)
        {
            var connectedMongoClient = null;
            
            try
            {
                connectedMongoClient = await getMongoClient();
                        
                const db = connectedMongoClient.db(dbName);
                
                var collection = db.collection(collectionName);
                
                var response = await collection.remove(
                    {
                        _id : mongoDB.ObjectID(id)   
                    },
                );
                
                resolve();
            }
            catch(ex)
            {
                console.log(ex);
                reject("Error occured while inserting a new document to a collection");
            }
            finally
            {
                if(connectedMongoClient !== null)
                {
                    connectedMongoClient.close();
                }
            }
        }
    );
}

module.exports = 
{   
    mongoClient : mongoClient,
    mongoUrl : mongoDBUrl,
    getClient : getMongoClient,
    getData : getDataFromCollection,
    addData : addDataToCollection,
    updateData : updateDataIntoCollection,
    deleteData : deleteDataFromCollection
}
