using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
    public class Form_FieldsTable : CommonClass
    {
        public int form_fieldsId { get; set; }

        public int formId { get; set; }

        public int topicId { get; set; }

        public string fieldName { get; set; }

        public string fieldType { get; set; }

        public string fieldLabel { get; set; }

        public string fieldValidationRule { get; set; }

        public string fieldSummary { get; set; }

        public string customCSS { get; set; }
    }
}
