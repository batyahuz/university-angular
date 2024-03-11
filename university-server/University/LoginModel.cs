namespace University
{
    public class LoginModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public LoginModel()
        {

        }

        public LoginModel(User user)
        {
            this.UserName = user.Name;
            this.Password = user.Password;
        }
    }
}
