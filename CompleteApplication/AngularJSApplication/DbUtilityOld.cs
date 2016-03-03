using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using System.Configuration;
using MongoDB.Bson.Serialization;
using MongoDB.Bson;
using MongoDB.Driver.Builders;
using System.Web.Mvc;
using MongoDB.Bson.IO;

namespace AngularMVC.DbUtilOld
{
    public class DbUtility
    {
        protected MongoDatabase mongoDB { get; set; }
        public DbUtility()
        {
            var mongoClient = new MongoClient(Convert.ToString(ConfigurationManager.AppSettings["MongoDBServer"]));
            MongoServer Server = mongoClient.GetServer();
            mongoDB = Server.GetDatabase(Convert.ToString(ConfigurationManager.AppSettings["DBName"]));
        }
        public bool SaveDocument(string objectToSave, string collectionName)
        {
            var document = BsonSerializer.Deserialize<BsonDocument>(objectToSave);
            var collection = mongoDB.GetCollection<BsonDocument>(collectionName);

            collection.Insert(document);
            return true;
        }
        public bool UpdateDocument(string objectToSave, string collectionName, string key, string value)
        {

            var document = BsonSerializer.Deserialize<BsonDocument>(objectToSave);
            var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
            collection.Update(
            Query.EQ(key, value),
            Update.Replace(document),
            UpdateFlags.Upsert);

            return true;
        }
        public bool UpdateDocumentByObjectId(string objectToSave, string collectionName)
        {

            var document = BsonSerializer.Deserialize<BsonDocument>(objectToSave);
            var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
            collection.Save(document);
            return true;
        }
        public bool DeleteDocumentByObjectId(string collectionName,ObjectId id)
        {
            var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
            var query = Query.EQ("_id", id);
            collection.Remove(query);
            return true;
        }
        public bool DeleteDocument(string collectionName,string key, string id)
        {
            var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
            var query = Query.EQ(key, id);
            collection.Remove(query);
            return true;
        }
        public string GetAllDocuments(string collectionName)
        {
            var collection = mongoDB.GetCollection(collectionName);
            return collection.FindAllAs<BsonDocument>().SetFields(Fields.Exclude("_id")).ToJson();
        }
        public string GetAllDocumentsWithObjectId(string collectionName)
        {
            var collection = mongoDB.GetCollection(collectionName);
            var jsonSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            return collection.FindAllAs<BsonDocument>().ToJson(jsonSettings);
        }
        public string GetDocumentById(string collectionName, string key, string value)
        {
            var jsonSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            var collection = mongoDB.GetCollection(collectionName);
            var query = Query.EQ(key, value);
            return collection.FindAs<BsonDocument>(query).SetFields(Fields.Exclude("_id")).ToJson(jsonSettings);
        }
        public string GetDocumentById(string collectionName, string key, ObjectId value)
        {
            var jsonSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            var collection = mongoDB.GetCollection(collectionName);
            var query = Query.EQ(key, value);
            return collection.FindAs<BsonDocument>(query).SetFields(Fields.Exclude("_id")).ToJson(jsonSettings);
        }
        public string GetDocumentByIdWithObjectId(string collectionName, string key, string value)
        {
            var jsonSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            var collection = mongoDB.GetCollection(collectionName);
            var query = Query.EQ(key, value);
            return collection.FindAs<BsonDocument>(query).ToJson(jsonSettings);
        }
        public string GetDocumentByIdWithObjectId(string collectionName, string key, ObjectId value)
        {
            var jsonSettings = new JsonWriterSettings { OutputMode = JsonOutputMode.Strict };
            var collection = mongoDB.GetCollection(collectionName);
            var query = Query.EQ(key, value);
            return collection.FindAs<BsonDocument>(query).ToJson(jsonSettings);
        }
        public MongoCollection GetCollection(string collectionName)
        {
            return mongoDB.GetCollection(collectionName);
        }

        public long GetCountOfCollection(string collectionName)
        {
            var collection = mongoDB.GetCollection(collectionName);
            return collection.Count();
        }
        public long GetMaxOfAttribute(string collectionName,string attributename)
        {
            var collection = mongoDB.GetCollection(collectionName);
            var max = collection.FindAll().SetSortOrder(SortBy.Descending(attributename)).SetLimit(1).FirstOrDefault().ToArray()[1].Value.ToInt64();
            return max;
        }


        #region Model Based Operations
        /// <summary>
        /// Save The Document, override the ToString() method in the model to provide the collection name
        /// </summary>
        /// <param name="objectToSave"></param>
        /// <returns></returns>
        public bool SaveCollection(object objectToSave)
        {
            string jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(objectToSave);
            BsonDocument document = BsonDocument.Parse(jsonString);

            var collection = mongoDB.GetCollection(objectToSave.ToString());

            collection.Insert(objectToSave);
            return true;
        }

        public bool SaveCollection(object objectToSave, string collectionName)
        {
            string jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(objectToSave);
            BsonDocument document = BsonDocument.Parse(jsonString);

            var collection = mongoDB.GetCollection(collectionName);

            collection.Insert(objectToSave);
            return true;
        }

        public MongoCollection<T> GetAllDocuments<T>(string collectionName)
        {
            return mongoDB.GetCollection<T>(collectionName);
        }
        #endregion
    }
}