namespace WebApiTodo.Models
{
    // we are use these two class & interface to read and store mongoDB database that we declare in appsettings.json
    public class TodoStoreDatabaseSettings : ITodoStoreDatabaseSettings
    {
        public string ConnectionString { get; set; } = String.Empty;
        public string DatabaseName { get; set; } = String.Empty;
        public string TodoCollectionName { get; set; } = String.Empty;
    }
}
