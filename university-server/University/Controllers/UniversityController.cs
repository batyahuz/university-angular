using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Xml.Linq;

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
            new Lecturer("lecturer", "address 2", "fdafd@gmail.com", "2222"),
        };

        private static readonly List<Category> Categories = new()
        {
            new Category("Camputers", ""),
            new Category("Math", ""),
            new Category("English", ""),
            new Category("Gym", ""),
            new Category("History", "")
        };

        private static readonly List<Course> Courses = new()
        {
            new Course("C#", 1, 50, new DateTime(2024,03,14),
                new List<string>(){"OOP", "string", "variables"}, LearningOptions.FRONTAL, 1, ""),
            new Course("Java", 1, 50, new DateTime(2024,01,14),
                            new List<string>(){"Server", "string", "variables"}, LearningOptions.ZOOM, 2, ""),
            new Course("Graghs", 2, 50, new DateTime(2024,05,14),
                            new List<string>(){"numbers", "pivots"}, LearningOptions.FRONTAL, 2, ""),
            new Course("Dancing", 4, 50, new DateTime(2025,02,09),
                            new List<string>(){"Songs", "Musics"}, LearningOptions.ZOOM, 1, ""),
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
        public IActionResult AddCourse([FromBody] Course course)
        {
            Courses.Add(course);
            return Ok(course);
        }

        [HttpPut("courses/{id}")]
        public IActionResult UpdateCourse(int id, [FromBody] Course course)
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
            exist.DateStart = course.DateStart;
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

        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            var exist = Users.FindAll(u => u.Name == loginModel.UserName);
            if (exist is null || exist.Count == 0)
                return Unauthorized(new { Error = "user" });
            var correct = exist.Find(u => u.Password == loginModel.Password);
            if (correct is null)
                return Unauthorized(new { Error = "password" });

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, loginModel.UserName),
                new Claim(ClaimTypes.Role, loginModel.Password)
            };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                issuer: _configuration.GetValue<string>("JWT:Issuer"),
                audience: _configuration.GetValue<string>("JWT:Audience"),
                claims: claims,
                expires: DateTime.Now.AddMinutes(6),
                signingCredentials: signinCredentials
            );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString });
        }

        [HttpPost("signin")]
        [AllowAnonymous]
        public IActionResult Signin([FromBody] User user)
        {
            var exist = Users.FindAll(u => u.Name == user.Name);
            if (exist is null)
                return NotFound(new { Error = "user name is already exist" });
            Users.Add(user);
            return Ok();
        }
    }
}