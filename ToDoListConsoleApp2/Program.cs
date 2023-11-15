using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using SimpleCRUD;

namespace TodoList
{
    public class Program
    {
        static void Main(string[] args)
        {
            QuestIO task1 = new QuestIO();

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
                string option = Console.ReadLine();

                if (option == "1")
                {
                    task1.Create_Quest();
                }
                else if (option == "2")
                {
                    task1.Read_Quest();
                }
                else if (option == "3")
                {
                    task1.Update_Quest();
                }
                else if (option == "4")
                {
                    task1.Delete_Quest();
                }
                else if (option == "e")
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