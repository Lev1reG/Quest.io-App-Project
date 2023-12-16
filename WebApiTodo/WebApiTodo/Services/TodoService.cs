using MongoDB.Driver;
using WebApiTodo.Models;

namespace WebApiTodo.Services
{
    public class TodoService : ITodoService
    {
        private readonly IMongoCollection<Todo> _todos;

        // constructor, contain some initialize
        public TodoService(ITodoStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _todos = database.GetCollection<Todo>(settings.TodoCollectionName);
        }

        // Implementation
        // create one task
        public Todo Create(Todo todo)
        {
            _todos.InsertOne(todo);
            return todo;
        }

        // get all task
        public List<Todo> Get()
        {
            return _todos.Find(todo => true).ToList();
        }

        // get task by id
        public Todo Get(string id)
        {
            return _todos.Find(todo => todo.Id == id).FirstOrDefault();
        }

        // Remove task by id
        public void Remove(string id)
        {
            _todos.DeleteOne(todo => todo.Id == id);
        }

        public void Update(string id, Todo todo)
        {
            _todos.ReplaceOne(todo => todo.Id == id, todo);
        }
    }
}
