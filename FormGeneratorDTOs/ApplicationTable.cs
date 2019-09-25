using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
    public class ApplicationTable : CommonClass
    {
        public int applicationId { get; set; }
        public string applicationTitle { get; set; }

        public string applicationTag { get; set; }

        public bool publicTemplate { get; set; }
        public bool protectedApplication { get; set; }

        public int status { get; set; }

        public int cycle { get; set; }

        public int rowOrder { get; set; }

        public string xlsFile { get; set; }

        public string StatusName { get; set; }

        public string publicTemplateText { get; set; }
    }
}
