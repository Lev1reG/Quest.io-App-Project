using Microsoft.AspNetCore.Mvc;
using WebApiTodo.Models;
using WebApiTodo.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiTodo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly ITodoService todoService;

        // Add Constructor
        public TodosController(ITodoService todoService)
        {
            this.todoService = todoService;
        }

        // GET: api/<TodosController>
        // get all task
        [HttpGet]
        public ActionResult<List<Todo>> Get()
        {
            return todoService.Get();
        }

        // GET api/<TodosController>/5
        // get task by id
        [HttpGet("{id}")]
        public ActionResult<Todo> Get(string id)
        {
            var todo = todoService.Get(id);

            if(todo == null)
            {
                return NotFound($"Task with Id = {id} not found");
            }

            return todo;
        }

        // POST api/<TodosController>
        // create task
        [HttpPost]
        public ActionResult<Todo> Post([FromBody] Todo todo)
        {
            todoService.Create(todo);

            return CreatedAtAction(nameof(Get), new { id = todo.Id }, todo);
        }

        // PUT api/<TodosController>/5
        // update task by id
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Todo todo)
        {
            var existingTodo = todoService.Get(id);

            if(existingTodo == null)
            {
                return NotFound($"Task with Id = {id} not found");
            }

            todoService.Update(id, todo);

            return NoContent();
        }

        // DELETE api/<TodosController>/5
        // delete task by Id
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var todo = todoService.Get(id);

            if (todo == null)
            {
                return NotFound($"Task with Id = {id} not found ");
            }

            todoService.Remove(todo.Id);

            return Ok($"Task with Id {id} deleted");
        }
    }
}
