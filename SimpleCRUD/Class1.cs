using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SimpleCRUD
{
    public class QuestIO
    {
        private List<string> taskList;

        public QuestIO()
        {
            taskList = new List<string>();
        }

        public void Create_Quest()
        {
            Console.WriteLine("\nPlease enter the name of the task to add to the list");
            string task = Console.ReadLine();
            taskList.Add(task);
            Console.WriteLine($"Task : \"{task}\" added to the list");
        }

        public void Read_Quest()
        {
            Console.WriteLine("\nCurrent tasks in the List:");
            for (int i = 0; i < taskList.Count; i++)
            {
                Console.WriteLine($"Task {i + 1} : {taskList[i]}");
            }
        }


        public void Update_Quest()
        {
            Console.WriteLine("Please enter the number of the task to edit");
            int number = Convert.ToInt32(Console.ReadLine());
            taskList.RemoveAt(number - 1);
            Console.WriteLine("Your new task: ");
            string task = Console.ReadLine();
            taskList.Insert(number - 1, task);
        }

        public void Delete_Quest()
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
    }

    public class Program
    {
        static void Main(string[] args)
        {
            QuestIO task1  = new QuestIO();

            bool ulangi = true;

            while (ulangi)
            {
                Console.WriteLine("\n========================");
                Console.WriteLine("What would you like to do ?");
                Console.WriteLine("Enter 1 to add a quest to the list.");
                Console.WriteLine("Enter 2 to view the list.");
                Console.WriteLine("Enter 3 to edit a task from the list.");
                Console.WriteLine("Enter 4 to remove a task from the list.");

                Console.WriteLine("Enter e to exit the program.");
                ConsoleKeyInfo option = Console.ReadKey();

                if (option.KeyChar == '1')
                {
                    task1.Create_Quest();
                }
                else if (option.KeyChar == '2')
                {
                    task1.Read_Quest();
                }
                else if (option.KeyChar == '3')
                {
                    task1.Update_Quest();
                }
                else if (option.KeyChar == '4')
                {
                    task1.Delete_Quest();
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