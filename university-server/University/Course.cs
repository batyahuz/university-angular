using static System.Net.Mime.MediaTypeNames;
using System.Xml.Linq;

namespace University
{
    public enum LearningOptions { FRONTAL, ZOOM }
    public class Course
    {
        private static int _id = 0;
        public int Id { get; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int NumberLessons { get; set; }
        public DateTime DateStart { get; set; }
        public List<string> Cilibus { get; set; }
        public LearningOptions OptionLearning { get; set; }
        public int LecturerId { get; set; }
        public string Image { get; set; }

        public Course(string name, int categoryId, int numberLessons, DateTime dateStart, LearningOptions optionLearning, int lecturerId, string image, params string[] cilibus)
        {
            Id = ++_id;
            Name = name;
            CategoryId = categoryId;
            NumberLessons = numberLessons;
            DateStart = dateStart;
            Cilibus = cilibus.ToList();
            OptionLearning = optionLearning;
            LecturerId = lecturerId;
            Image = image;
        }

        public Course(CourseOutModel outModel)
        {
            Id = ++_id;
            Name = outModel.Name;
            CategoryId = outModel.CategoryId;
            NumberLessons = outModel.NumberLessons;
            DateTime date;
            DateTime.TryParse(outModel.DateStart, out date);
            DateStart = date;
            Cilibus = outModel.Cilibus;
            OptionLearning = outModel.OptionLearning;
            LecturerId = outModel.LecturerId;
            Image = outModel.Image;
        }
    }
}
