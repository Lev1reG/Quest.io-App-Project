using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace User_Interface
{
    public partial class Quest_Io : Form
    {
        public Quest_Io()
        {
            InitializeComponent();
        }

        DataTable QuestIo = new DataTable(); //Store our data
        bool isEditting = false;
        private void Quest_Io_Load(object sender, EventArgs e)
        {
            //Create columns
            QuestIo.Columns.Add("Quest");
            QuestIo.Columns.Add("Description");

            //Point our datagridview to our datasource
            questView.DataSource = QuestIo;
        }

        private void newButton_Click(object sender, EventArgs e)
        {
            questTextBox.Text = "";
            descTextBox.Text = "";
        }

        private void editButton_Click(object sender, EventArgs e)
        {
            isEditting = true;
            //Fill text fields with data from table
            questTextBox.Text = QuestIo.Rows[questView.CurrentCell.RowIndex].ItemArray[0].ToString();
            descTextBox.Text = QuestIo.Rows[questView.CurrentCell.RowIndex].ItemArray[1].ToString();
        }

        private void delButton_Click(object sender, EventArgs e)
        {
            try
            {
                QuestIo.Rows[questView.CurrentCell.RowIndex].Delete();
            }
            catch(Exception ex) 
            {
                Console.WriteLine("Error: " +  ex);
            }
        }

        private void saveButton_Click(object sender, EventArgs e)
        {
            if(isEditting)
            {
                QuestIo.Rows[questView.CurrentCell.RowIndex]["Quest"] = questTextBox.Text;
                QuestIo.Rows[questView.CurrentCell.RowIndex]["Desciption"] = descTextBox.Text;
            }
            else
            {
                QuestIo.Rows.Add(questTextBox.Text, descTextBox.Text);
            }
            //Clear fields
            questTextBox.Text = "";
            descTextBox.Text = "";
            isEditting = false;
        }
    }
}
