using BisinessCardWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BisinessCardWebsite.Repository.Impl
{
    public class CardRepository : ICardRepository
    {
        public CardViewModel GetCard()
        {
            var card = new CardViewModel { 
                FirstName = "Roma",
                LastName = "Shalabodov",
                Age = 24,
                Description = "Junior C# Developer"
            };

            return card;
        }

        public bool SendEmail(EmailModel email)
        {
            return true;
        }
    }
}
