using LMS.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Implementation
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private LMSDBContext dbContext;
        private DbSet<T> dbSet;
        public BaseRepository(LMSDBContext _context)
        {
            this.dbContext = _context;
            this.dbSet = _context.Set<T>();
        }
        public async Task<T> CreateRecordAsync(T entity)
        {
            var e = await this.dbSet.AddAsync(entity);
            await this.dbContext.SaveChangesAsync();
            return entity;
        }
        public async Task<T> GetRecordByIdAsync(int Id)
        {
            return await this.dbSet.FindAsync(Id);
        }

        public async Task<bool> DeleteByIdAsync(int Id)
        {
            var record = await this.GetRecordByIdAsync(Id);
            if(record != null)
            {
                this.dbContext.Entry(record).State = EntityState.Deleted;
                await this.dbContext.SaveChangesAsync();
                return true;
            }

            else
            {
                return false;
            }
        }

        public async Task<List<T>> GetAllRecordsAsync()
        {
            return await this.dbSet.ToListAsync();
        }

        public async Task<bool> UpdateRecordAsync(T entity)
        {
            var updateRecord = this.dbSet.Update(entity);
            await this.dbContext.SaveChangesAsync();
            return true;
        }
    }
}
