using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularMVC.DbUtil;
using Newtonsoft.Json;
using MongoDB.Bson;
using System.Collections;
using Newtonsoft.Json.Linq;

namespace AngularJSApplication.Controllers
{
    public class AngularJSApplicationController : Controller
    {
        DbUtility dbUtility = new DbUtility();
        
        //public string getStateList()
        //{
        //    try
        //    {
        //        return dbUtility.GetAllDocuments("MasterState");
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public string getDistrictList(string stateName)
        //{
        //    try
        //    {
        //        if (stateName == null)
        //        {
        //            return "";
        //        }
        //        else
        //        {
        //            return dbUtility.GetDocumentById("MasterDistrict", "StateName", stateName);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public string saveSignInInformation(string signIn)
        //{
        //    try
        //    {
        //        if (dbUtility.SaveDocument(signIn, "SignInInformation"))
        //        {
        //            return "Success";
        //        }
        //        else
        //        {
        //            return "Error";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public string getSignInUsersList()
        //{
        //    try
        //    {
        //        return dbUtility.GetAllDocumentsWithObjectId("SignInInformation");
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public string getSignInInformation(string id)
        //{
        //    try
        //    {
        //        return dbUtility.GetDocumentByIdWithObjectId("SignInInformation", "_id", ObjectId.Parse(id));
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public string editSignInInformation(string signIn)
        //{
        //    try
        //    {
        //        if (dbUtility.UpdateDocumentByObjectId(signIn, "SignInInformation"))
        //        {
        //            return "Success";
        //        }
        //        else
        //        {
        //            return "Error";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public string deleteSignInInformation(string id)
        //{
        //    try
        //    {
        //        if (dbUtility.DeleteDocumentByObjectId("SignInInformation", ObjectId.Parse(id)))
        //        {
        //            return "Success";
        //        }
        //        else
        //        {
        //            return "Error";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public string isAlreadySignIn(string eMailID)
        //{
        //    try
        //    {
        //        string result = dbUtility.GetDocumentById("SignInInformation", "EMailID", eMailID);
        //        if (result == "[]")
        //        {
        //            return "Success";
        //        }
        //        else
        //        {
        //            return "Error";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}
        //public dynamic validateLogin(dynamic login)
        //{
        //    try
        //    {
        //        dynamic strLogin = JsonConvert.DeserializeObject(login);
        //        dynamic result = JsonConvert.DeserializeObject(dbUtility.GetDocumentByIdWithObjectId("SignInInformation", "EMailID", strLogin.EMailID.Value));
                
        //        if (result[0] == null)
        //        {
        //            return "Error";
        //        }
        //        else
        //        {
        //            if (strLogin.Password.Value == result[0].Password.Value)
        //            {
        //                return result[0];
        //            }
        //            else
        //            {
        //                return "Error";
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return "Error";
        //    }
        //}

        public string getStateList()
        {
            try
            {
                return dbUtility.GetAllDocuments("MasterState");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getDistrictList(string stateName)
        {
            try
            {
                if (stateName == null)
                {
                    return "";
                }
                else
                {
                    return dbUtility.GetDocumentsById("MasterDistrict", "StateName", stateName);
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string saveSignInInformation(string signIn)
        {
            try
            {
                if (dbUtility.SaveDocument(signIn, "SignInInformation"))
                {
                    return "Success";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getSignInUsersList()
        {
            try
            {
                return dbUtility.GetAllDocumentsWithObjectId("SignInInformation");
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getSignInInformation(string id)
        {
            try
            {
                return dbUtility.GetDocumentByObjectIdWithObjectId("SignInInformation", "_id", id);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string editSignInInformation(string signIn)
        {
            try
            {
                if (dbUtility.ReplaceDocumentByObjectId(signIn, "SignInInformation"))
                {
                    return "Success";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string deleteSignInInformation(string id)
        {
            try
            {
                if (dbUtility.DeleteDocumentByObjectId("SignInInformation", id))
                {
                    return "Success";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string isAlreadySignIn(string eMailID)
        {
            try
            {
                string result = dbUtility.GetDocumentsById("SignInInformation", "EMailID", eMailID);
                if (result == "[]")
                {
                    return "Success";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public dynamic validateLogin(dynamic login)
        {
            try
            {
                dynamic strLogin = JsonConvert.DeserializeObject(login);
                dynamic result = JsonConvert.DeserializeObject(dbUtility.GetDocumentByIdWithObjectId("SignInInformation", "EMailID", strLogin.EMailID.Value));

                if (result[0] == null)
                {
                    return "Error";
                }
                else
                {
                    if (strLogin.Password.Value == result[0].Password.Value)
                    {
                        return result[0];
                    }
                    else
                    {
                        return "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getSignInUsersListByState(string stateName)
        {
            try
            {
                return dbUtility.GetDocumentByIdWithObjectId("SignInInformation", "State", stateName);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string getSignInUsersListByDistrict(string districtName)
        {
            try
            {
                return dbUtility.GetDocumentByIdWithObjectId("SignInInformation", "District", districtName);
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public string placeOrder(string id, string orderItems)
        {
            try
            {
                if (dbUtility.InsertDocumentsInArrayByObjectId(id, "SignInInformation", "Orders", orderItems))
                {
                    return "Success";
                }
                else
                {
                    return "Error";
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
    }
}
