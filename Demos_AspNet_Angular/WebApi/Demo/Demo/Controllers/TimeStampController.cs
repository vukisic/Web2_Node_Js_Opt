using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    /// <summary>
    /// Controller for TimeStamp Demo
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TimeStampController : ControllerBase
    {
        /// <summary>
        /// Action for GET request for working with timestamps
        /// </summary>
        /// <param name="param">Parameter which will be used as an argument for conversion</param>
        /// <returns></returns>
        [HttpGet]
        [Route("convert/{param}")]
        public IActionResult Convert(string param)
        {
            long unix = -1;
            string utc = "Invalid Date!";
            DateTime temp = DateTime.Now;
            if (String.IsNullOrEmpty(param))
            {
                // Use current DateTime
                utc = DateTimeToString(temp);
                unix = DateTimeToMilliseconds(temp);
                return Ok(new { unix, utc });
            }
            else if (TryConvertToDateTime(param, out temp))
            {
                // Convert given DateTime 
                utc = DateTimeToString(temp);
                unix = DateTimeToMilliseconds(temp);
                return Ok(new { unix, utc });
            }
            else
            {
                // Invalid Request paremeter
                return BadRequest(new { unix, utc });
            }

        }
        
        /// <summary>
        /// Converts DateTime to String which represents UTC time in ISO 8601 format 
        /// </summary>
        /// <param name="dateTime">DateTime to be converted</param>
        /// <returns></returns>
        private string DateTimeToString(DateTime dateTime)
        {
            return dateTime.ToString("ddd, dd MMM yyyy HH:mm:ss \"GMT\"zzz");
        }

        /// <summary>
        /// Converts DateTime to UTC - UNIX milliseconds
        /// </summary>
        /// <param name="dateTime">DateTime to be converted</param>
        /// <returns></returns>
        private long DateTimeToMilliseconds(DateTime dateTime)
        {
            return (long)(dateTime.ToUniversalTime().Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds);
        }


        /// <summary>
        /// Converts string in DateTime if string is valid DateTime
        /// </summary>
        /// <param name="str">String to be converted</param>
        /// <param name="dateTime">Out parameter, result of conversion</param>
        /// <returns></returns>
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