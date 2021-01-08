using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Repositories.Interfaces
{
    public interface IBaseRepository <T> where T : class
    {
        Task<T> CreateRecordAsync(T entity);
        Task<List<T>> GetAllRecordsAsync();
        Task<T> GetRecordByIdAsync(int Id);
        Task<bool> UpdateRecordAsync(T entity);
        //Task<bool> DeleteByIdAsync(T entity);
        Task<bool> DeleteByIdAsync(int Id);
    }
}
