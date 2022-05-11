using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BisinessCardWebsite.Models
{
    public class EmailModel
    {
        [Required(ErrorMessage = "Please enter a name")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Please enter a phone number")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Please enter a email")]
        public string EmailAddress { get; set; }
        public string Topic { get; set; }
        public string Message { get; set; }
    }
}
