namespace User_Interface
{
    partial class Quest_Io
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Quest_Io));
            this.label1 = new System.Windows.Forms.Label();
            this.questTextBox = new System.Windows.Forms.TextBox();
            this.descTextBox = new System.Windows.Forms.TextBox();
            this.Description = new System.Windows.Forms.Label();
            this.Quest = new System.Windows.Forms.Label();
            this.newButton = new System.Windows.Forms.Button();
            this.editButton = new System.Windows.Forms.Button();
            this.saveButton = new System.Windows.Forms.Button();
            this.delButton = new System.Windows.Forms.Button();
            this.questView = new System.Windows.Forms.DataGridView();
            this.deadlineBox = new System.Windows.Forms.DateTimePicker();
            this.label2 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.questView)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.Font = new System.Drawing.Font("Verdana", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(12, 31);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(1640, 154);
            this.label1.TabIndex = 0;
            this.label1.Text = "Quest.Io";
            this.label1.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            // 
            // questTextBox
            // 
            this.questTextBox.BackColor = System.Drawing.Color.WhiteSmoke;
            this.questTextBox.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.questTextBox.Location = new System.Drawing.Point(12, 217);
            this.questTextBox.Name = "questTextBox";
            this.questTextBox.Size = new System.Drawing.Size(1640, 32);
            this.questTextBox.TabIndex = 1;
            // 
            // descTextBox
            // 
            this.descTextBox.BackColor = System.Drawing.Color.WhiteSmoke;
            this.descTextBox.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.descTextBox.Location = new System.Drawing.Point(12, 284);
            this.descTextBox.Name = "descTextBox";
            this.descTextBox.Size = new System.Drawing.Size(1640, 32);
            this.descTextBox.TabIndex = 2;
            // 
            // Description
            // 
            this.Description.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Description.Location = new System.Drawing.Point(12, 256);
            this.Description.Name = "Description";
            this.Description.Size = new System.Drawing.Size(143, 25);
            this.Description.TabIndex = 3;
            this.Description.Text = "Description:";
            // 
            // Quest
            // 
            this.Quest.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Quest.Location = new System.Drawing.Point(12, 185);
            this.Quest.Name = "Quest";
            this.Quest.Size = new System.Drawing.Size(125, 25);
            this.Quest.TabIndex = 4;
            this.Quest.Text = "Quest:";
            // 
            // newButton
            // 
            this.newButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(59)))), ((int)(((byte)(114)))), ((int)(((byte)(124)))));
            this.newButton.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.newButton.Location = new System.Drawing.Point(11, 463);
            this.newButton.Name = "newButton";
            this.newButton.Size = new System.Drawing.Size(405, 50);
            this.newButton.TabIndex = 5;
            this.newButton.Text = "New";
            this.newButton.UseVisualStyleBackColor = false;
            this.newButton.Click += new System.EventHandler(this.newButton_Click);
            // 
            // editButton
            // 
            this.editButton.BackColor = System.Drawing.Color.Gold;
            this.editButton.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.editButton.Location = new System.Drawing.Point(422, 463);
            this.editButton.Name = "editButton";
            this.editButton.Size = new System.Drawing.Size(405, 50);
            this.editButton.TabIndex = 6;
            this.editButton.Text = "Edit";
            this.editButton.UseVisualStyleBackColor = false;
            this.editButton.Click += new System.EventHandler(this.editButton_Click);
            // 
            // saveButton
            // 
            this.saveButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(131)))), ((int)(((byte)(167)))), ((int)(((byte)(117)))));
            this.saveButton.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.saveButton.Location = new System.Drawing.Point(1246, 463);
            this.saveButton.Name = "saveButton";
            this.saveButton.Size = new System.Drawing.Size(405, 50);
            this.saveButton.TabIndex = 7;
            this.saveButton.Text = "Save";
            this.saveButton.UseVisualStyleBackColor = false;
            this.saveButton.Click += new System.EventHandler(this.saveButton_Click);
            // 
            // delButton
            // 
            this.delButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(176)))), ((int)(((byte)(95)))), ((int)(((byte)(102)))));
            this.delButton.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.delButton.Location = new System.Drawing.Point(833, 463);
            this.delButton.Name = "delButton";
            this.delButton.Size = new System.Drawing.Size(405, 50);
            this.delButton.TabIndex = 8;
            this.delButton.Text = "Delete";
            this.delButton.UseVisualStyleBackColor = false;
            this.delButton.Click += new System.EventHandler(this.delButton_Click);
            // 
            // questView
            // 
            this.questView.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.Fill;
            this.questView.BackgroundColor = System.Drawing.Color.WhiteSmoke;
            this.questView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.questView.GridColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(163)))), ((int)(((byte)(126)))));
            this.questView.Location = new System.Drawing.Point(12, 519);
            this.questView.Name = "questView";
            this.questView.RowHeadersWidth = 62;
            this.questView.RowTemplate.Height = 28;
            this.questView.Size = new System.Drawing.Size(1640, 473);
            this.questView.TabIndex = 9;
            // 
            // deadlineBox
            // 
            this.deadlineBox.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.deadlineBox.Location = new System.Drawing.Point(12, 369);
            this.deadlineBox.Name = "deadlineBox";
            this.deadlineBox.Size = new System.Drawing.Size(367, 32);
            this.deadlineBox.TabIndex = 0;
            // 
            // label2
            // 
            this.label2.Font = new System.Drawing.Font("Verdana", 10F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(12, 341);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(143, 25);
            this.label2.TabIndex = 10;
            this.label2.Text = "Deadline: ";
            // 
            // Quest_Io
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(185)))), ((int)(((byte)(163)))), ((int)(((byte)(126)))));
            this.ClientSize = new System.Drawing.Size(1664, 1004);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.deadlineBox);
            this.Controls.Add(this.questView);
            this.Controls.Add(this.delButton);
            this.Controls.Add(this.saveButton);
            this.Controls.Add(this.editButton);
            this.Controls.Add(this.newButton);
            this.Controls.Add(this.Quest);
            this.Controls.Add(this.Description);
            this.Controls.Add(this.descTextBox);
            this.Controls.Add(this.questTextBox);
            this.Controls.Add(this.label1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "Quest_Io";
            this.Text = "Quest Io";
            this.Load += new System.EventHandler(this.Quest_Io_Load);
            ((System.ComponentModel.ISupportInitialize)(this.questView)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox questTextBox;
        private System.Windows.Forms.TextBox descTextBox;
        private System.Windows.Forms.Label Description;
        private System.Windows.Forms.Label Quest;
        private System.Windows.Forms.Button newButton;
        private System.Windows.Forms.Button editButton;
        private System.Windows.Forms.Button saveButton;
        private System.Windows.Forms.Button delButton;
        private System.Windows.Forms.DataGridView questView;
        private System.Windows.Forms.DateTimePicker deadlineBox;
        private System.Windows.Forms.Label label2;
    }
}

