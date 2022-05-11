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
        private readonly ICardRepository _repo;
        private readonly ILogger<CardController> _logger;

        public CardController(ICardRepository repo, ILogger<CardController> logger)
        {
            this._repo = repo;
            this._logger = logger;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetCard() => View(new EmailModel());

        [HttpPost]
        [Route("")]
        public IActionResult SendEmail(EmailModel email)
        {
            if (ModelState.IsValid)
            {
                var result = _repo.SendEmail(email);
                if (result)
                {
                    ViewBag.SendEmailResponse = "The letter was successfully sent. I will contact you shortly";
                    return View("GetCard", new EmailModel());
                }
                else
                {
                    ViewBag.SendEmailResponse = "Ops... Something went wrong :(";
                    return View("GetCard", email);
                }
            }
            else
            {
                return View("GetCard", email);
            }   
        }

        [Route("error")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
