using FormMVCProject.Repository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using FormGeneratorDTOs;
using System.IO;
using System.Net.Http.Headers;

namespace FormMVCProject.Controllers
{
    [Route("api/FormAPI")]
    public class FormAPIController : ApiController
    {
        private IFormGeneratorRepository iform;
        string connectionString = "";
     
        public FormAPIController(IFormGeneratorRepository _iform)
        {

            iform = _iform;
            connectionString = ConfigurationManager.ConnectionStrings["connectionString"].ConnectionString;
        }

        // GET: api/FormAPI
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/FormAPI/GetApplicationList 
        [Route("api/FormAPI/GetApplicationList")]
        [HttpGet]
        public async Task<IHttpActionResult> GetApplicationList()
        {
            ApplicationTable data = new ApplicationTable();
            data.action = 4;
            return Json(new { data = await iform.ManageApplicationResp(connectionString,data) });
        }


        [Route("api/FormAPI/ManageApplication")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageApplication(ApplicationTable data)
        {
            return Json( await iform.ManageApplicationResp(connectionString, data) );
        }

        [Route("api/FormAPI/ManageTopic")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageTopic(TopicTable data)
        {
            return Json(await iform.ManageTopicResp(connectionString, data));
        }


        [Route("api/FormAPI/ManageRole")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageRole(RoleMaster data)
        {
            return Json(await iform.ManageRoleMasterResp(connectionString, data));
        }

        [Route("api/FormAPI/ManageForm")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageForm(FormTable data)
        {
            return Json(await iform.ManageFormResp(connectionString, data));
        }

        [Route("api/FormAPI/SingleForm")]
        [HttpPost]
        public async Task<IHttpActionResult> SingleForm(FormTable data)
        {
            return Json(await iform.SingleFormResp(connectionString, data));
        }

        [Route("api/FormAPI/FormData")]
        [HttpPost]
        public async Task<IHttpActionResult> FormData(Form_DataTable data)
        {
            return Json(await iform.FormDataResp(connectionString, data));
        }

        [Route("api/FormAPI/ManageFormFields")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageFormFields(Form_FieldsTable data)
        {
            return Json(await iform.ManageFormFieldsResp(connectionString, data));
        }
        [Route("api/FormAPI/FormRoles")]
        [HttpPost]
        public async Task<IHttpActionResult> FormRoles(Form_Roles data)
        {
            return Json(await iform.FormRolesResp(connectionString, data));
        }
        [Route("api/FormAPI/ManageGroups")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageGroups(Groups data)
        {
            return Json(await iform.ManageGroupsResp(connectionString, data));
        }

        [Route("api/FormAPI/ManageSubGroups")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageSubGroups(SubGroups data)
        {
            return Json(await iform.ManageSubGroupsResp(connectionString, data));
        }
        [Route("api/FormAPI/ManageLanguages")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageLanguages(Languages data)
        {
            return Json(await iform.ManageLanguagesResp(connectionString, data));
        }

        [Route("api/FormAPI/ManageMenuMaster")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageMenuMaster(MenuMaster data)
        {
            return Json(await iform.ManageMenuMasterResp(connectionString, data));
        }
        [Route("api/FormAPI/ManageMenuItemsMaster")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageMenuItemsMaster(MenuItemsMaster data)
        {
            return Json(await iform.ManageMenuItemsMasterResp(connectionString, data));
        }
        [Route("api/FormAPI/ManageOrders")]
        [HttpPost]
        public async Task<IHttpActionResult> ManageOrders(OrdersTable data)
        {
            return Json(await iform.ManageOrdersResp(connectionString, data));
        }
        [Route("api/FormAPI/ManagePackeryData")]
        [HttpPost]
        public async Task<IHttpActionResult> ManagePackeryData(Packery_Data data)
        {
            return Json(await iform.ManagePackeryDataResp(connectionString, data));
        }

        [Route("api/FormAPI/getLanguage")]
        [HttpGet]
        public HttpResponseMessage Generate(string filename)
        {
            var path = System.Web.HttpContext.Current.Server.MapPath("~/Bundles/AngularOutput/assets/i18n/"+ filename); ;
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(path, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");

            result.Content.Headers.ContentDisposition.FileName = Path.GetFileName(path);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }

    }
}