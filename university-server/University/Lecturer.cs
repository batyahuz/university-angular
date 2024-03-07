﻿namespace University
{
    public class Lecturer
    {
        private static int _id = 0;
        public int Id { get; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public Lecturer(string name, string address, string email, string password)
        {
            Id = ++_id;
            Name = name;
            Address = address;
            Email = email;
            Password = password;
        }
    }
}
