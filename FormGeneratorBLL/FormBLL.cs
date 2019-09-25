using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using System.Data.SqlClient;
using FormGeneratorDTOs;
using Dapper;

namespace FormGeneratorBLL
{
    public class FormBLL : IFormBLL
    {
        //public async Task<IEnumerable<ApplicationTable>> showApplicationListBLL(string connectionString)
        //{
        //    try
        //    {
        //        List<ApplicationTable> listapplication = new List<ApplicationTable>();
        //        using (SqlConnection con = new SqlConnection(connectionString))
        //        {
        //            using (SqlCommand cmd = new SqlCommand("Sp_ManageApplication", con))
        //            {
        //                await Task.Delay(0);
        //                con.Open();
        //                cmd.CommandType = CommandType.StoredProcedure;
        //               // cmd.Parameters.Add("@action", SqlDbType.Int, 4);
        //                cmd.Parameters.AddWithValue("@action", 4);

        //                SqlDataReader rdr = cmd.ExecuteReader();

        //                while (rdr.Read())
        //                {
        //                    ApplicationTable appli = new ApplicationTable();
        //                    appli.applicationId = Convert.ToInt32(rdr["applicationId"]);
        //                    appli.applicationTitle = rdr["applicationTitle"].ToString();
        //                    appli.applicationTag = rdr["applicationTag"].ToString();
        //                    appli.xlsFile = rdr["xlsFile"].ToString();
        //                    appli.created_at = Convert.ToDateTime(rdr["created_at"]);
        //                  //  appli.updated_at = rdr["updated_at"] != null?   Convert.ToDateTime(rdr["updated_at"]): Convert.ToDateTime("1/1/1900");
        //                    appli.status = Convert.ToInt32(rdr["status"]);
        //                    appli.rowOrder = Convert.ToInt32(rdr["rowOrder"]);
        //                    appli.cycle = Convert.ToInt32(rdr["cycle"]);
        //                    appli.protectedApplication = Convert.ToBoolean(rdr["protected"]);
        //                    appli.publicTemplate = Convert.ToBoolean(rdr["publicTemplate"]);
        //                    listapplication.Add(appli);
        //                }
        //                con.Close();
        //            }
        //        }
        //        return listapplication;
        //    }

        //    catch (Exception ex)
        //    {
        //        string mess = ex.Message;
        //        throw ex;
        //    }
        //}

        public async Task<IEnumerable<ApplicationTable>> ManageApplicationBLL(string connectionString, ApplicationTable data)
        {
            try
            {
                IEnumerable<ApplicationTable> listapplication;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@applicationId", data.applicationId);
                    Parameters.Add("@applicationTitle", data.applicationTitle);
                    Parameters.Add("@applicationTag", data.applicationTag);
                    Parameters.Add("@protected", data.protectedApplication);
                    Parameters.Add("@publicTemplate", data.publicTemplate);
                    Parameters.Add("@status", data.status);
                    Parameters.Add("@cycle", data.cycle);
                    Parameters.Add("@rowOrder", data.rowOrder);
                    Parameters.Add("@created_by", data.created_by);
                    Parameters.Add("@updated_by", data.updated_by);
                    Parameters.Add("@xlsFile", data.xlsFile); ;
                    listapplication = (await db.QueryAsync<ApplicationTable>("Sp_ManageApplication", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return listapplication;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<TopicTable>> ManageTopicBLL(string connectionString, TopicTable data)
        {
            try
            {
                IEnumerable<TopicTable> listTopic;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@topicId", data.TopicId);
                    Parameters.Add("@applicationId", data.applicationId);
                    Parameters.Add("@topicTitle", data.topicTitle);
                    Parameters.Add("@topicDescription", data.topicDescription);
                    Parameters.Add("@topicField", data.topicField);
                    Parameters.Add("@max_records", data.max_records);
                    Parameters.Add("@created_by", data.created_by);
                    Parameters.Add("@updated_by", data.updated_by);
                    listTopic = (await db.QueryAsync<TopicTable>("Sp_ManageTopic", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return listTopic;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<RoleMaster>> ManageRoleMasterBLL(string connectionString, RoleMaster data)
        {
            try
            {
                IEnumerable<RoleMaster> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@RoleId", data.RoleId);
                    Parameters.Add("@RoleName", data.RoleName);
                    list = (await db.QueryAsync<RoleMaster>("Sp_ManageRoleMaster", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<FormTable>> ManageFormBLL(string connectionString, FormTable data)
        {
            try
            {
                IEnumerable<FormTable> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    list = (await db.QueryAsync<FormTable>("Sp_ManageForms", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<FormTable> SingleFormBLL(string connectionString, FormTable data)
        {
            try
            {
                FormTable list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    list = (await db.QuerySingleOrDefaultAsync<FormTable>("Sp_ManageForms", Parameters, commandType: CommandType.StoredProcedure));
                    //  db.Close();
                }
                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }



        public async Task<Form_DataTable> FormDataBLL(string connectionString, Form_DataTable data)
        {
            try
            {
                Form_DataTable formDataSingle;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    formDataSingle = (await db.QuerySingleOrDefaultAsync<Form_DataTable>("Sp_ManageForms", Parameters, commandType: CommandType.StoredProcedure));
                    //  db.Close();
                }
                return formDataSingle;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<Form_FieldsTable>> ManageFormFieldsBLL(string connectionString, Form_FieldsTable data)
        {
            try
            {
                IEnumerable<Form_FieldsTable> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    list = (await db.QueryAsync<Form_FieldsTable>("Sp_ManageForms", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }
        public async Task<Form_Roles> FormRolesBLL(string connectionString, Form_Roles data)
        {
            try
            {
                Form_Roles formDataSingle;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    formDataSingle = (await db.QuerySingleOrDefaultAsync<Form_Roles>("Sp_ManageForms", Parameters, commandType: CommandType.StoredProcedure));
                    //  db.Close();
                }
                return formDataSingle;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<Groups>> ManageGroupsBLL(string connectionString, Groups data)
        {
            try
            {
                IEnumerable<Groups> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@groupId", data.groupId);
                    Parameters.Add("@masterGroupId", data.masterGroupId);
                    Parameters.Add("@groupName", data.groupName);
                    Parameters.Add("@firebase_room_id", data.firebase_room_id);
                    Parameters.Add("@groupIcon", data.groupIcon);
                    Parameters.Add("@status", data.status);
                    Parameters.Add("@created_by", data.created_by);
                    Parameters.Add("@updated_by", data.updated_by);
                    list = (await db.QueryAsync<Groups>("Sp_ManageGroups", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<SubGroups>> ManageSubGroupsBLL(string connectionString, SubGroups data)
        {
            try
            {
                IEnumerable<SubGroups> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@subGroupId", data.subGroupId);
                    Parameters.Add("@groupId", data.groupId);
                    Parameters.Add("@subGroupName", data.subGroupName);
                    Parameters.Add("@subGroupIcon", data.subGroupIcon);
                    Parameters.Add("@firebase_room_id", data.firebase_room_id);
                    Parameters.Add("@status", data.status);
                    Parameters.Add("@created_by", data.created_by);
                    Parameters.Add("@updated_by", data.updated_by);
                    list = (await db.QueryAsync<SubGroups>("Sp_ManageSubGroup", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<Languages>> ManageLanguagesBLL(string connectionString, Languages data)
        {
            try
            {
                IEnumerable<Languages> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@Id", data.Id);
                    Parameters.Add("@language", data.language);
                    Parameters.Add("@code", data.code);
                    Parameters.Add("@status", data.status);
                    list = (await db.QueryAsync<Languages>("Sp_ManageLanguages", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<MenuMaster>> ManageMenuMasterBLL(string connectionString, MenuMaster data)
        {
            try
            {
                IEnumerable<MenuMaster> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@menuId", data.menuId);
                    Parameters.Add("@menuName", data.menuName);
                    Parameters.Add("@menuDescription", data.menuDescription);
                    Parameters.Add("@menuGroup", data.menuGroup);
                    Parameters.Add("@bgImage", data.bgImage);
                    Parameters.Add("@bgColor", data.bgColor);
                    Parameters.Add("@gutter", data.gutter);
                    Parameters.Add("@number", data.number);
                    Parameters.Add("@responsive", data.responsive);
                    Parameters.Add("@shiftlayout", data.shiftlayout);
                    Parameters.Add("@expandOneItem", data.expandOneItem);
                    Parameters.Add("@expandColor", data.expandColor);
                    Parameters.Add("@mouseoverColor", data.mouseoverColor);
                    Parameters.Add("@market_place", data.market_place);
                    Parameters.Add("@first_level_menu", data.first_level_menu);
                    Parameters.Add("@rowOrder", data.rowOrder);
                    Parameters.Add("@userMenuID", data.userMenuID);                
                    list = (await db.QueryAsync<MenuMaster>("[Sp_ManageMenuMaster]", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<MenuItemsMaster>> ManageMenuItemsMasterBLL(string connectionString, MenuItemsMaster data)
        {
            try
            {
                IEnumerable<MenuItemsMaster> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    Parameters.Add("@menuId", data.menuId);
                    Parameters.Add("@menuItemId", data.menuItemId);
                    Parameters.Add("@sequence", data.sequence);
                    Parameters.Add("@type", data.type);
                    Parameters.Add("@short_name", data.short_name);
                    Parameters.Add("@name", data.name);
                    Parameters.Add("@description", data.description);
                    Parameters.Add("@color", data.color);
                    Parameters.Add("@link", data.link);
                    Parameters.Add("@parameter", data.parameter);
                    Parameters.Add("@original_size", data.original_size);
                    Parameters.Add("@expanded_size", data.expanded_size);
                    Parameters.Add("@icon", data.icon);
                    Parameters.Add("@pictureWithWord", data.pictureWithWord);
                    Parameters.Add("@originalTransparency", data.originalTransparency);
                    Parameters.Add("@expansionTransparency", data.expansionTransparency);
                    Parameters.Add("@mouseoverTransparency", data.mouseoverTransparency);
                    Parameters.Add("@shortNameColor", data.shortNameColor);
                    Parameters.Add("@otherTextColor", data.otherTextColor);
                    Parameters.Add("@itemBorder", data.itemBorder);
                    Parameters.Add("@itemBorderColor", data.itemBorderColor);
                    Parameters.Add("@itemIcon", data.itemIcon);
                    Parameters.Add("@itemIconType", data.itemIconType);
                    Parameters.Add("@openNewTab", data.openNewTab);
                    Parameters.Add("@shortNameSize", data.shortNameSize);
                    Parameters.Add("@displayType", data.displayType);
                    Parameters.Add("@fullScreen", data.fullScreen);
                    Parameters.Add("@system_type", data.system_type);
                    Parameters.Add("@LastUsedDateTime", data.LastUsedDateTime);
                    Parameters.Add("@imageLoop", data.imageLoop);
                    Parameters.Add("@videoLoop", data.videoLoop);
                    Parameters.Add("@slideshowImages", data.slideshowImages);
                    Parameters.Add("@slideshowVideo", data.slideshowVideo);
                    Parameters.Add("@sliderWithWords", data.sliderWithWords);
                    Parameters.Add("@videoWithWords", data.videoWithWords);               
                    list = (await db.QueryAsync<MenuItemsMaster>("[Sp_ManageMenuItemsMaster]", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<OrdersTable>> ManageOrdersBLL(string connectionString, OrdersTable data)
        {
            try
            {
                IEnumerable<OrdersTable> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    list = (await db.QueryAsync<OrdersTable>("Sp_ManageForms", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }
        }

        public async Task<IEnumerable<Packery_Data>> ManagePackeryDataBLL(string connectionString, Packery_Data data)
        {
            try
            {
                IEnumerable<Packery_Data> list;
                using (IDbConnection db = new SqlConnection(connectionString))
                {
                    db.Open();
                    var Parameters = new DynamicParameters();
                    Parameters.Add("@action", data.action);
                    list = (await db.QueryAsync<Packery_Data>("Sp_ManageForms", Parameters, commandType: CommandType.StoredProcedure)).AsList();
                    //  db.Close();
                }

                return list;
            }

            catch (Exception ex)
            {
                string mess = ex.Message;
                throw ex;
            }

        }

    }
}
