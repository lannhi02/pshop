using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Nhi",
                    Email = "nhi@test.com",
                    UserName = "nhi@test.com",
                    Address = new Address
                    {
                        FirstName = "Nhi",
                        LastName = "Nhi",
                        Street = "273 An Dương Vương, Quận 5, TPHCM"
                    }               
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}