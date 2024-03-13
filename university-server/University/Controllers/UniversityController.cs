using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Xml.Linq;
using static University.Controllers.AuthorizationToken;

namespace University.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class UniversityController : ControllerBase
    {
        private static readonly List<User> Users = new()
        {
            new User("Malki", "Menachem 18", "malki@gmail.com", "123"),
            new User("Batya", "Ami 9", "batya@gmail.com", "321"),
            new User("q", "Menachem 18", "malki@gmail.com", "q"),
            new User("w", "Menachem 18", "malki@gmail.com", "w")
        };

        private static readonly List<Lecturer> Lecturers = new()
        {
            new Lecturer("Marze", "address 2", "fdafd@gmail.com", "0987"),
            new Lecturer("my name is lecturer", "address 2", "fdafd@gmail.com", "2222"),
        };

        private static readonly List<Category> Categories = new()
        {
            new Category("Camputers", "assets/categories-icons/01.png"),
            new Category("Math", "assets/categories-icons/02.png"),
            new Category("English", "assets/categories-icons/03.png"),
            new Category("Gym", "assets/categories-icons/04.png"),
            new Category("History", "assets/categories-icons/05.svg")
        };

        private static readonly List<Course> Courses = new()
        {
            new Course("C#", 1, 50, new DateTime(2024,03,14),
                new List<string>(){"OOP", "string", "variables"}, LearningOptions.FRONTAL, 1, "assets/courses-icons/csharp.svg"),
            new Course("Java", 1, 50, new DateTime(2024,01,14),
                            new List<string>(){"Server", "string", "variables"}, LearningOptions.ZOOM, 2, "assets/courses-icons/java.png"),
            new Course("Graghs", 2, 50, new DateTime(2024,05,14),
                            new List<string>(){"numbers", "pivots"}, LearningOptions.FRONTAL, 2, "assets/courses-icons/graphs.png"),
            new Course("Dancing", 4, 50, new DateTime(2025,02,09),
                            new List<string>(){"Songs", "Musics"}, LearningOptions.ZOOM, 1, "assets/courses-icons/dancing.png"),
        };

        private readonly IConfiguration _configuration;

        public UniversityController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("courses")]
        public IActionResult GetAllCourses()
        {
            return Ok(Courses);
        }

        [HttpGet("courses/{id}")]
        public IActionResult GetCourseById(int id)
        {
            var course = Courses.Find(x => x.Id == id);
            if (course is null)
                return NotFound();
            return Ok(course);
        }

        [HttpPost("courses")]
        public IActionResult AddCourse([FromBody] CourseOutModel course)
        {
            Courses.Add(new Course(course));
            return Ok(course);
        }

        [HttpPut("courses/{id}")]
        public IActionResult UpdateCourse(int id, [FromBody] CourseOutModel course)
        {
            var exist = Courses.Find(x => x.Id == id);
            if (exist is null)
                return NotFound();
            exist.Name = course.Name;
            exist.CategoryId = course.CategoryId;
            exist.LecturerId = course.LecturerId;
            exist.OptionLearning = course.OptionLearning;
            exist.Cilibus.Clear();
            course.Cilibus.ForEach(c => exist.Cilibus.Add(c));
            exist.NumberLessons = course.NumberLessons;
            exist.DateStart = DateTime.Parse(course.DateStart);
            exist.Image = course.Image;
            return Ok(exist);
        }

        [HttpDelete("courses/{id}")]
        public IActionResult DeleteCourse(int id)
        {
            var course = Courses.Find(c => c.Id == id);
            if (course is null)
                return NotFound();
            Courses.Remove(course);
            return NoContent();
        }

        [HttpGet("categories")]
        public IActionResult GetAllCategories()
        {
            return Ok(Categories);
        }

        [HttpGet("lecturers")]
        public IActionResult GetAllLecturers()
        {
            return Ok(Lecturers);
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Login([FromBody] LoginModel loginModel, bool islecturer = false)
        {
            if (islecturer)
            {
                var exist = Lecturers.FindAll(l => l.Name == loginModel.UserName);
                if (exist is null || exist.Count == 0)
                    return Unauthorized(new { Error = "user" });
                
                var correct = exist.Find(l => l.Password == loginModel.Password);
                if (correct is null)
                    return Unauthorized(new { Error = "password" });
            }
            else
            {
                var exist = Users.FindAll(u => u.Name == loginModel.UserName);
                if (exist is null || exist.Count == 0)
                    return Unauthorized(new { Error = "user" });
                
                var correct = exist.Find(u => u.Password == loginModel.Password);
                if (correct is null)
                    return Unauthorized(new { Error = "password" });
            }

            var tokenString = MakeToken(loginModel, _configuration);
            return Ok(new { Token = tokenString });
        }

        [HttpPost("signin")]
        [AllowAnonymous]
        public IActionResult Signin([FromBody] User user)
        {
            if (Users.Exists(u => u.Email == user.Email))
                return NotFound(new { Error = "user is already exist" });
            Users.Add(user);

            var tokenString = MakeToken(new LoginModel(user), _configuration);
            return Ok(new { Token = tokenString });
        }
    }
}