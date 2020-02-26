using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeStampController : ControllerBase
    {
        [HttpGet]
        [Route("convert/{param}")]
        public IActionResult Convert(string param)
        {
            long unix = -1;
            string utc = "Invalid Date!";
            DateTime temp = DateTime.Now;
            if (String.IsNullOrEmpty(param))
            {
                utc = DateTimeToString(temp);
                unix = DateTimeToMilliseconds(temp);
                return Ok(new { unix, utc });
            }
            else if (TryConvertToDateTime(param, out temp))
            {
                utc = DateTimeToString(temp);
                unix = DateTimeToMilliseconds(temp);
                return Ok(new { unix, utc });
            }
            else
            {
                return BadRequest(new { unix, utc });
            }

        }

        private string DateTimeToString(DateTime dateTime)
        {
            return dateTime.ToString("ddd, dd MMM yyyy HH:mm:ss \"GMT\"zzz");
        }

        private long DateTimeToMilliseconds(DateTime dateTime)
        {
            return (long)(dateTime.ToUniversalTime().Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds);
        }

        private bool TryConvertToDateTime(string str, out DateTime dateTime)
        {
            dateTime = new DateTime();
            if (long.TryParse(str, out long milliseconds))
            {
                dateTime = (new DateTime(1970, 1, 1)).AddMilliseconds(milliseconds);
                return true;
            }
            else
            {
                if (DateTime.TryParse(str, out dateTime))
                {
                    return true;
                }
            }
            return false;
        }
    }
}