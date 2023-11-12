using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoList
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("TODOLIST APP");
            List<string> taskList = new List<string>();
            bool ulangi = true;

            while (ulangi)
            {
                Console.WriteLine("\n========================");
                Console.WriteLine("What would you like to do ?");
                Console.WriteLine("Enter 1 to add a task to the list.");
                Console.WriteLine("Enter 2 to remove a task from the list.");
                Console.WriteLine("Enter 3 to view the list.");
                Console.WriteLine("Enter e to exit the program.");
                ConsoleKeyInfo option = Console.ReadKey();

                if (option.KeyChar == '1')
                {
                    Console.WriteLine("\nPlease enter the name of the task to add to the list");
                    string task = Console.ReadLine();
                    taskList.Add(task);
                    Console.WriteLine($"Task : \"{task}\" added to the list");

                }
                else if (option.KeyChar == '2')
                {
                    Console.WriteLine("");
                    for (int i = 0; i < taskList.Count; i++)
                    {
                        Console.WriteLine($"{i + 1} : {taskList[i]}");
                    }
                    Console.WriteLine("Please enter the number of the task to remove from the list.");
                    int number = Convert.ToInt32(Console.ReadLine());
                    taskList.RemoveAt(number - 1);
                    Console.WriteLine($"Task {number} removed successfully");

                }
                else if (option.KeyChar == '3')
                {
                    Console.WriteLine("\nCurrent tasks in the List:");
                    for (int i = 0; i < taskList.Count; i++)
                    {
                        Console.WriteLine($"Task {i + 1} : {taskList[i]}");
                    }
                }
                else if (option.KeyChar == 'e')
                {
                    ulangi = false;
                    Console.WriteLine("\nExiting Program");

                }
                else
                {
                    Console.WriteLine("\nInvalid option, please try again");
                }
            }
            Console.WriteLine("Thank you for using the program");

        }
    }
}