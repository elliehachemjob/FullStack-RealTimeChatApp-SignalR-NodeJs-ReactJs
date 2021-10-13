using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api11.Models
{
    public class Users
    {
        public int ClientId { get; set; }
        public string Email { get; set; }
        public string Auth { get; set; }
        public int IsAdmin { get; set; }
    }
}
