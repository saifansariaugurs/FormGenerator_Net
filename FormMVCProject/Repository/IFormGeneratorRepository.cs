using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FormGeneratorDTOs;

namespace FormMVCProject.Repository
{
  public interface IFormGeneratorRepository
    {
        Task<IEnumerable<ApplicationTable>> ManageApplicationResp(string connectionString,ApplicationTable data);
        Task<IEnumerable<TopicTable>> ManageTopicResp(string connectionString, TopicTable data);

        Task<IEnumerable<RoleMaster>> ManageRoleMasterResp(string connectionString, RoleMaster data);


        /// <summary>
        /// 
        /// </summary>
        /// <param name="connectionString"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        Task<IEnumerable<FormTable>> ManageFormResp(string connectionString, FormTable data);

        Task<FormTable> SingleFormResp(string connectionString, FormTable data);

        Task<Form_DataTable> FormDataResp(string connectionString, Form_DataTable data);

        Task<IEnumerable<Form_FieldsTable>> ManageFormFieldsResp(string connectionString, Form_FieldsTable data);

        Task<Form_Roles> FormRolesResp(string connectionString, Form_Roles data);

        Task<IEnumerable<Groups>> ManageGroupsResp(string connectionString, Groups data);

        Task<IEnumerable<SubGroups>> ManageSubGroupsResp(string connectionString, SubGroups data);

        Task<IEnumerable<Languages>> ManageLanguagesResp(string connectionString, Languages data);

        Task<IEnumerable<MenuMaster>> ManageMenuMasterResp(string connectionString, MenuMaster data);

        Task<IEnumerable<MenuItemsMaster>> ManageMenuItemsMasterResp(string connectionString, MenuItemsMaster data);

        Task<IEnumerable<OrdersTable>> ManageOrdersResp(string connectionString, OrdersTable data);
        Task<IEnumerable<Packery_Data>> ManagePackeryDataResp(string connectionString, Packery_Data data);

    }
}
