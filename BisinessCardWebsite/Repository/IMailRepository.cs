using BisinessCardWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BisinessCardWebsite.Repository
{
    public interface IMailRepository
    {
        bool SendEmail(EmailModel email);
    }
}
