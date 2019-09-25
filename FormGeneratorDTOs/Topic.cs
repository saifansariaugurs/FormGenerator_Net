using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
  public  class TopicTable : CommonClass
    {
        public int TopicId { get; set; }
        public int applicationId { get; set; }
        public string topicTitle { get; set; }

        public string topicDescription { get; set; }

        public string topicField { get; set; }

        public int max_records { get; set; }


    }
}
