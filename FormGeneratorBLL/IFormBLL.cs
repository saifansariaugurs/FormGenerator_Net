using FormGeneratorDTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FormGeneratorBLL
{ 
   public interface IFormBLL
    {
        //Task<IEnumerable<ApplicationTable>> showApplicationListBLL(string connectionString);

        Task<IEnumerable<ApplicationTable>> ManageApplicationBLL(string connectionString,ApplicationTable data);

        Task<IEnumerable<TopicTable>> ManageTopicBLL(string connectionString, TopicTable data);

        Task<IEnumerable<RoleMaster>> ManageRoleMasterBLL(string connectionString, RoleMaster data);

        Task<IEnumerable<FormTable>> ManageFormBLL(string connectionString, FormTable data);

        Task<FormTable> SingleFormBLL(string connectionString, FormTable data);

        Task<Form_DataTable> FormDataBLL(string connectionString, Form_DataTable data);

        Task<IEnumerable<Form_FieldsTable>> ManageFormFieldsBLL(string connectionString, Form_FieldsTable data);

        Task<Form_Roles> FormRolesBLL(string connectionString, Form_Roles data);

        Task<IEnumerable<Groups>> ManageGroupsBLL(string connectionString, Groups data);

        Task<IEnumerable<SubGroups>> ManageSubGroupsBLL(string connectionString, SubGroups data);

        Task<IEnumerable<Languages>> ManageLanguagesBLL(string connectionString, Languages data);

        Task<IEnumerable<MenuMaster>> ManageMenuMasterBLL(string connectionString, MenuMaster data);

        Task<IEnumerable<MenuItemsMaster>> ManageMenuItemsMasterBLL(string connectionString, MenuItemsMaster data);

        Task<IEnumerable<OrdersTable>> ManageOrdersBLL(string connectionString, OrdersTable data);
        Task<IEnumerable<Packery_Data>> ManagePackeryDataBLL(string connectionString, Packery_Data data);
    }
}
