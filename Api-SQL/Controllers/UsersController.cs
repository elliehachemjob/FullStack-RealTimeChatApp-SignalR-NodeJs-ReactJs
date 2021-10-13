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
    public class UsersController : ControllerBase
    {
        //preperation DI
        private readonly IConfiguration _configuration;
        // DI
        public UsersController(IConfiguration configuration)

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
                            dbo.Users
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
        public JsonResult Post(Users users)
        {
            //you can use raw queries here you can use stored procedures or entity framwork here 
            string query = @"
                            IF EXISTS(SELECT * FROM dbo.Users  WHERE  Email=@Email)
                            BEGIN
                            SELECT 'Sorry,this user already exist'
                            END
                            ELSE
                            BEGIN
                            insert into dbo.Users
                            values(@Email,@Auth,@IsAdmin)
                            END
                            ";

            //Putting data into a datatable object  
            DataTable table = new DataTable();
            //Putting the source of the server
            string sqlDataSource = _configuration.GetConnectionString("Ellie");
            //To read sql data
            SqlDataReader myReader;

            //executing the query 
            int rows = 0;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();


                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Email", users.Email);
                    myCommand.Parameters.AddWithValue("@Auth", users.Auth);
                    myCommand.Parameters.AddWithValue("@IsAdmin", users.IsAdmin);
                    //checking row effected to know response
                    rows = myCommand.ExecuteNonQuery();
                    myReader = myCommand.ExecuteReader();
                    //fill table using sql dataReader (my reader)
                    table.Load(myReader);
                    myReader.Close();

                    myCon.Close();

                }

            }
            //returning data in json format
            if (rows >= 1)
            {
                return new JsonResult("Added Successfully");
            }
            else
            {
                return new JsonResult("Email Already Exist");
            }
        }

        [HttpPost("{login}")]
        public JsonResult SignUp(Users users)
        {
            //you can use raw queries here you can use stored procedures or entity framwork here 
            string query = @"
                            IF EXISTS(SELECT * FROM dbo.Users  WHERE  Email=@Email AND Auth=@Auth)
                            BEGIN
                            insert into dbo.Users
                            values(@Email,@Auth,@IsAdmin)
                            END
                            ELSE
                            BEGIN
                            SELECT 'Make sure email and password are correct'
                            END
                            ";

            //Putting data into a datatable object  
            DataTable table = new DataTable();
            //Putting the source of the server
            string sqlDataSource = _configuration.GetConnectionString("Ellie");
            //To read sql data
            SqlDataReader myReader;

            //executing the query 
            int rows = 0;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();


                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Email", users.Email);
                    myCommand.Parameters.AddWithValue("@Auth", users.Auth);
                    myCommand.Parameters.AddWithValue("@IsAdmin", users.IsAdmin);
                    //checking row effected to know response
                    rows = myCommand.ExecuteNonQuery();
                    myReader = myCommand.ExecuteReader();
                    //fill table using sql dataReader (my reader)
                    table.Load(myReader);
                    myReader.Close();

                    myCon.Close();

                }

            }
            //returning data in json format
            if (rows >= 1)
            {
                return new JsonResult("Logged In Successfully");
            }
            else
            {
                return new JsonResult("Make sure email and password are correct");
            }
        }


        [HttpPut]
        public JsonResult Put(Users users)
        {
            //you can use raw queries here you can use stored procedures or entity framwork here 
            string query = @"
                            update dbo.Users
                            set Email= @Email,
                            Auth=@Auth,
                            IsAdmin=@IsAdmin
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
                    myCommand.Parameters.AddWithValue("@ClientId", users.ClientId);
                    myCommand.Parameters.AddWithValue("@Email", users.Email);
                    myCommand.Parameters.AddWithValue("@Auth", users.Auth);
                    myCommand.Parameters.AddWithValue("@IsAdmin", users.IsAdmin);
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
                            delete from  dbo.Users
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
