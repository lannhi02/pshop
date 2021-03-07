using System;

namespace API.Errors
{
    public class ApiReponse
    {
        public ApiReponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "bad request",
                401 => "not authorized",
                404 => "not found",
                500 => "internal error",
                _ => null
            };
        }
    }
}