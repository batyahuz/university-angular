namespace University
{
    public class Category
    {
        private static int _id = 0;
        public int Id { get; }
        public string Name { get; set; }
        public string Icon { get; set; }

        public Category(string name, string icon)
        {
            Id = ++_id;
            Name = name;
            Icon = icon;
        }
    }
}
