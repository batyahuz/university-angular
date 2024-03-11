namespace University
{
    public class CourseOutModel
    {
        private static int _id = 0;
        public int Id { get; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int NumberLessons { get; set; }
        public string DateStart { get; set; }
        public List<string> Cilibus { get; set; }
        public LearningOptions OptionLearning { get; set; }
        public int LecturerId { get; set; }
        public string Image { get; set; }

        public CourseOutModel(string name, int categoryId, int numberLessons, string dateStart, List<string> cilibus, LearningOptions optionLearning, int lecturerId, string image)
        {
            Id = ++_id;
            Name = name;
            CategoryId = categoryId;
            NumberLessons = numberLessons;
            DateStart = dateStart;
            Cilibus = cilibus;
            OptionLearning = optionLearning;
            LecturerId = lecturerId;
            Image = image;
        }
    }
}
