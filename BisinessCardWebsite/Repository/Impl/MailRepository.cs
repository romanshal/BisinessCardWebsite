using BisinessCardWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace BisinessCardWebsite.Repository.Impl
{
    public class MailRepository : IMailRepository
    {
        private readonly string smtpServer = "post2";
        private readonly string authorFrom = "shalabodov.roman@mail.ru";
        private readonly string authorPassword = "RomaROma1421";

        public bool SendEmail(EmailModel email)
        {
            var result = false;
            try
            {
                MailMessage mail = CreateMailBody(email);
                SmtpClient client = CreateSMPTClientForSendingEmail();

                client.Send(mail);
                mail.Dispose();

                result = true;

                return result;
            }
            catch (Exception e)
            {
                return result;
            }
        }

        private MailMessage CreateMailBody(EmailModel email)
        {
            MailMessage mail = new MailMessage();

            mail.From = new MailAddress(authorFrom);
            mail.To.Add(new MailAddress("shalabodov.roman@gmail.com"));

            if (!String.IsNullOrEmpty(email.Topic))
                mail.Subject = email.Topic;

            mail.Body = CreateMessageBody(email);
            return mail;
        }

        private SmtpClient CreateSMPTClientForSendingEmail()
        {
            SmtpClient client = new SmtpClient(smtpServer);
            //client.Host = smtpServer;
            //client.Port = port;
            //client.EnableSsl = true;
            //client.UseDefaultCredentials = true;
            client.Credentials = new NetworkCredential(authorFrom.Split('@')[0], authorPassword);
            client.DeliveryMethod = SmtpDeliveryMethod.Network;

            return client;
        }

        private string CreateMessageBody(EmailModel email)
        {
            string message = "";

            message += "Name: " + email.Name + "\r\n";
            message += "\r\n";
            message += email.Message + "\r\n";
            message += "\r\n";
            message += "Email: " + email.EmailAddress + "\r\n";
            message += "Phone: " + email.PhoneNumber;

            return message;
        }
    }
}
