namespace WebApiTodo.Models
{
    public interface ITodoStoreDatabaseSettings
    {
        // these three variable correspond to appsettings.json
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }

        string TodoCollectionName { get; set; }
    }
}
