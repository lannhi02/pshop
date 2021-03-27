using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        public string ProductName { get; set; }

        [Required]
        [Range(0.1, double.MaxValue, ErrorMessage = "Giá có vấn đề.")]
        public decimal Price { get; set; }
        
        [Required]
        [Range(1, double.MaxValue, ErrorMessage = "Số lượng có vấn đề.")]
        public int Quantity { get; set; }
        
        [Required]
        public string PictureUrl { get; set; }
        
        [Required]
        public string Brand { get; set; }
        
        [Required]
        public string Type { get; set; }
    }
}