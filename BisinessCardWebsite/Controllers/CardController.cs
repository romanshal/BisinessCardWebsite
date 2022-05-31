using BisinessCardWebsite.Models;
using BisinessCardWebsite.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace BisinessCardWebsite.Controllers
{
    public class CardController : Controller
    {
        private readonly ICardRepository _cardRepo;
        private readonly IMailRepository _mailRepo;
        private readonly ILogger<CardController> _logger;

        public CardController(ICardRepository cardRepo, IMailRepository mailRepo, ILogger<CardController> logger)
        {
            this._cardRepo = cardRepo;
            this._mailRepo = mailRepo;
            this._logger = logger;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetCard() => View(new EmailModel());

        [HttpPost]
        //[Route("")]
        public IActionResult SendEmail(EmailModel email)
        {
            if (ModelState.IsValid)
            {
                var result = _mailRepo.SendEmail(email);
                if (result)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }   
        }
    }
}
