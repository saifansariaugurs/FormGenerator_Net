using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FormGeneratorDTOs;
using FormGeneratorBLL;
namespace FormMVCProject.Repository
{
    public class FormGeneratorClassRepository : IFormGeneratorRepository
    {
        FormBLL formBLL = new FormBLL();
        public async Task<IEnumerable<ApplicationTable>> ManageApplicationResp(string connectionString,ApplicationTable data)
        {

            return await formBLL.ManageApplicationBLL(connectionString,data);
        }
        public async Task<IEnumerable<TopicTable>> ManageTopicResp(string connectionString, TopicTable data)
        {

            return await formBLL.ManageTopicBLL(connectionString, data);
        }

        public async Task<IEnumerable<RoleMaster>> ManageRoleMasterResp(string connectionString, RoleMaster data)
        {

            return await formBLL.ManageRoleMasterBLL(connectionString, data);
        }

        public async Task<IEnumerable<FormTable>> ManageFormResp(string connectionString, FormTable data)
        {

            return await formBLL.ManageFormBLL(connectionString, data);
        }

        public async Task<FormTable> SingleFormResp(string connectionString, FormTable data)
        {

            return await formBLL.SingleFormBLL(connectionString, data);
        }

        public async Task<Form_DataTable> FormDataResp(string connectionString, Form_DataTable data)
        {

            return await formBLL.FormDataBLL(connectionString, data);
        }

        public async Task<IEnumerable<Form_FieldsTable>> ManageFormFieldsResp(string connectionString, Form_FieldsTable data)
        {

            return await formBLL.ManageFormFieldsBLL(connectionString, data);
        }

        public async Task<Form_Roles> FormRolesResp(string connectionString, Form_Roles data)
        {

            return await formBLL.FormRolesBLL(connectionString, data);
        }

        public async Task<IEnumerable<Groups>> ManageGroupsResp(string connectionString, Groups data)
        {

            return await formBLL.ManageGroupsBLL(connectionString, data);
        }

        public async Task<IEnumerable<SubGroups>> ManageSubGroupsResp(string connectionString, SubGroups data)
        {

            return await formBLL.ManageSubGroupsBLL(connectionString, data);
        }

        public async Task<IEnumerable<Languages>> ManageLanguagesResp(string connectionString, Languages data)
        {

            return await formBLL.ManageLanguagesBLL(connectionString, data);
        }

        public async Task<IEnumerable<MenuMaster>> ManageMenuMasterResp(string connectionString, MenuMaster data)
        {

            return await formBLL.ManageMenuMasterBLL(connectionString, data);
        }

        public async Task<IEnumerable<MenuItemsMaster>> ManageMenuItemsMasterResp(string connectionString, MenuItemsMaster data)
        {

            return await formBLL.ManageMenuItemsMasterBLL(connectionString, data);
        }
        public async Task<IEnumerable<OrdersTable>> ManageOrdersResp(string connectionString, OrdersTable data)
        {

            return await formBLL.ManageOrdersBLL(connectionString, data);
        }
        public async Task<IEnumerable<Packery_Data>> ManagePackeryDataResp(string connectionString, Packery_Data data)
        {

            return await formBLL.ManagePackeryDataBLL(connectionString, data);
        }

    }
}
