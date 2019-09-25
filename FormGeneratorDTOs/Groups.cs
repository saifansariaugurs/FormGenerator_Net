using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
   public class Groups : CommonClass
    {
        public int groupId { get; set; }
        public int masterGroupId { get; set; }
        public string groupName { get; set; }
        public string firebase_room_id { get; set; }
        public string groupIcon { get; set; }
        public int status { get; set; }

    }
}
