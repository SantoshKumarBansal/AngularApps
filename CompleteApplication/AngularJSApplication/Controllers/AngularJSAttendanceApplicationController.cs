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
using System.Net.NetworkInformation;

namespace AngularJSApplication.Controllers
{
    public class AngularJSAttendanceApplicationController : Controller
    {
        DbUtility dbUtility = new DbUtility();

        public string uploadAttendanceData(string teachersList)
        {
            try
            {
                if (CheckForInternetConnection())
                {
                    if (dbUtility.SaveDocuments(teachersList, "Teachers"))
                    {
                        return "Success";
                    }
                    else
                    {
                        return "Error";
                    }
                }
                else
                {
                    return "NoInternetConnection";
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
        public static bool CheckForInternetConnection()
        {
            try
            {
                Ping myPing = new Ping();
                String host = "google.com";
                byte[] buffer = new byte[32];
                int timeout = 1000;
                PingOptions pingOptions = new PingOptions();
                PingReply reply = myPing.Send(host, timeout, buffer, pingOptions);
                return (reply.Status == IPStatus.Success);
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}

