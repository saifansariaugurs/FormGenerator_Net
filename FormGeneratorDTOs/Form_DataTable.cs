using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
 public   class Form_DataTable : CommonClass
    {
        public int formDataId { get; set; }
        public int formId { get; set; }
        public int topicId { get; set; }
        public int applicationId { get; set; }
        public int formFieldId { get; set; }
        public int userId { get; set; }
        public string current_status { get; set; }

        public int cycle { get; set; }

        public string fieldName { get; set; }

        public string fieldDataText { get; set; }
        public string fieldDataMultimedia { get; set; }
        public string formGroupKey { get; set; }
        public int MasterFormId { get; set; }
        public string MasterFormRow { get; set; }

        public int formRecordOrder { get; set; }

        public int formRecordStatus { get; set; }

        public string created_ip { get; set; }

        public string updated_ip { get; set; }
        


    }
}
