using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
   public class Form_Config : CommonClass
    {
        public int Id { get; set; }
        public int userId { get; set; }
        public int formId { get; set; }
        public string configName { get; set; }

        public string configSettings { get; set; }
    }
}
