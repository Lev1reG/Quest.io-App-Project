using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; // Use this so we can use BsonId

namespace WebApiTodo.Models
{
    [BsonIgnoreExtraElements] // ignore extra field from mongoDB
    public class Todo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] // convert mongo data type to a.net data type
        public string Id { get; set; } = String.Empty;

        [BsonElement("quest")] // mapping string quest in Todo class to quest field in mongo document
        public string Quest { get; set; } = String.Empty;

        [BsonElement("desc")]
        public string Desc { get; set; } = String.Empty;

        [BsonElement("dl")]
        [BsonRepresentation(BsonType.DateTime)] // Represent DateTime as BSON DateTime
        public DateTime DL { get; set; } = DateTime.Now; // Set default value to current UTC time or any default value you prefer

        [BsonElement("done")]
        public bool Done { get; set; } // Add a boolean property for completion status

    }
}
