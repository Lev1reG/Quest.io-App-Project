using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApiTodo.Models;
using WebApiTodo.Services;
using static System.Net.WebRequestMethods;

var builder = WebApplication.CreateBuilder(args);

// dealing with cors to allow fetch from react
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "_myAllowSpecificOrigins", policy =>
    {
        policy.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

// Add services to the container.

builder.Services.AddControllers();
   
// Add standard dependency injection

builder.Services.Configure<TodoStoreDatabaseSettings>(builder.Configuration.GetSection(nameof(TodoStoreDatabaseSettings)));

builder.Services.AddSingleton<ITodoStoreDatabaseSettings>(sp => sp.GetRequiredService<IOptions<TodoStoreDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s => new MongoClient(builder.Configuration.GetValue<string>("TodoStoreDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<ITodoService, TodoService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build(); 

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseCors(options =>
// {
//    options.WithOrigins("http://localhost:3000/") // Ganti dengan alamat aplikasi React Anda di produksi
//           .AllowAnyMethod()
//           .AllowAnyHeader();
// });

app.UseHttpsRedirection();

app.UseAuthorization();

// dealing with cors to allow fetch from react
app.UseCors("_myAllowSpecificOrigins");

app.MapControllers();

app.Run();
