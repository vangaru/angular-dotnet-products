using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularStudy.Data;
using AngularStudy.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularStudy.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext; 
            InitDbIfEmpty();
        }

        private void InitDbIfEmpty()
        {
            if (_dbContext.Products.Any()) return;
            _dbContext.Products.Add(new Product { Name = "iPhone12 mini", Company = "Apple", Price = 670 } );
            _dbContext.Products.Add(new Product { Name = "Galaxy S20", Company = "Samsung", Price = 650 } );
            _dbContext.Products.Add(new Product { Name = "Pixel 4", Company = "Google", Price = 630 } );
            _dbContext.SaveChanges();

        }

        [HttpGet]
        public async Task<IEnumerable<Product>> GetAsync()
        {
            return await _dbContext.Products.ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Product> GetAsync(int id)
        {
            var product = await _dbContext.Products.FirstOrDefaultAsync(p => p.Id == id);
            return product;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(Product product)
        {
            if (!ModelState.IsValid) return BadRequest();
            await _dbContext.Products.AddAsync(product);
            await _dbContext.SaveChangesAsync();
            return Ok(product);
        }

        [HttpPut]
        public async Task<IActionResult> PutAsync(Product product)
        {
            if (!ModelState.IsValid) return BadRequest();
            _dbContext.Products.Update(product);
            await _dbContext.SaveChangesAsync();
            return Ok(product);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var product = await _dbContext.Products.FirstOrDefaultAsync(p => p.Id == id);
            if (product == null) return Ok(null);
            _dbContext.Products.Remove(product);
            await _dbContext.SaveChangesAsync();
            return Ok(product);
        }
    }
}