using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using api11.Models;

namespace api11.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatedDataController : ControllerBase
    {
        //preperation DI
        private readonly IConfiguration _configuration;
        // DI
        public RelatedDataController(IConfiguration configuration)

        {
            // DI
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            //you can use raw queries here you can use stored procedures or entity framwork here 
            string query = @"
                            select * from
                            dbo.RelatedData
                            ";

            //Putting data into a datatable object  
            DataTable table = new DataTable();
            //Putting the source of the server
            string sqlDataSource = _configuration.GetConnectionString("Ellie");
            //To read sql data
            SqlDataReader myReader;

            //executing the query 
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    //fill table using sql dataReader (my reader)
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            //returning data in json format
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(RelatedData relatedData)
        {
            //you can use raw queries here you can use stored procedures or entity framwork here 
            string query = @"
                            insert into dbo.RelatedData
                            values(@Age,@Gender)
                            ";

            //Putting data into a datatable object  
            DataTable table = new DataTable();
            //Putting the source of the server
            string sqlDataSource = _configuration.GetConnectionString("Ellie");
            //To read sql data
            SqlDataReader myReader;

            //executing the query 
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Age", relatedData.Age);
                    myCommand.Parameters.AddWithValue("@Gender", relatedData.Gender);
                    myReader = myCommand.ExecuteReader();
                    //fill table using sql dataReader (my reader)
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            //returning data in json format
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(RelatedData relatedData)
        {
            //you can use raw queries here you can use stored procedures or entity framwork here 
            string query = @"
                            update dbo.RelatedData
                            set Age= @Age,
                            Gender=@Gender
                            where ClientId=@ClientId
                            ";

            //Putting data into a datatable object  
            DataTable table = new DataTable();
            //Putting the source of the server
            string sqlDataSource = _configuration.GetConnectionString("Ellie");
            //To read sql data
            SqlDataReader myReader;

            //executing the query 
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ClientId", relatedData.ClientId);
                    myCommand.Parameters.AddWithValue("@Age", relatedData.Age);
                    myCommand.Parameters.AddWithValue("@Gender", relatedData.Gender);
                    myReader = myCommand.ExecuteReader();
                    //fill table using sql dataReader (my reader)
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            //returning data in json format
            return new JsonResult("Updated Successfully");
        }

        //This way delete method cna accept id in the url
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            //you can use raw queries here you can use stored procedures or entity framwork here 
            string query = @"
                            delete from  dbo.RelatedData
                            where ClientId=@ClientId
                            ";

            //Putting data into a datatable object  
            DataTable table = new DataTable();
            //Putting the source of the server
            string sqlDataSource = _configuration.GetConnectionString("Ellie");
            //To read sql data
            SqlDataReader myReader;

            //executing the query 
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ClientId", id);
                    myReader = myCommand.ExecuteReader();
                    //fill table using sql dataReader (my reader)
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            //returning data in json format
            return new JsonResult("Deleted Successfully");
        }
    }
}
