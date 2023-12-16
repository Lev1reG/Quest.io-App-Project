using WebApiTodo.Models;

namespace WebApiTodo.Services
{
    public interface ITodoService
    {
        // return all todo
        List<Todo> Get();

        // return single student by id
        Todo Get(string id);

        // create one todo
        Todo Create(Todo todo);

        // update student by id
        void Update(string id, Todo todo);

        // delete student by id
        void Remove(string id);
    }
}
