using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
   public class Users : CommonClass
    {
        public int Id { get; set; }
        public string firebase_uid { get; set; }
        public string uid { get; set; }
        public string fullName { get; set; }
        public string name { get; set; }

        public string email { get; set; }
        public bool emailVerified { get; set; }

        public bool emailCheck { get; set; }

        public string password { get; set; }

        public string remember_token { get; set; }

        public string userIcon { get; set; }

        public string phoneNumber { get; set; }
        public bool phoneVerified { get; set; }

        public bool phoneCheck { get; set; }

        public int role { get; set; }
        public int status { get; set; }

        public int planID { get; set; }

        public string planSequence { get; set; }

        public string tooltipSequence { get; set; }
        public string FB_id { get; set; }

        public string GPlus_id { get; set; }

        public string created_ip { get; set; }

    }
}
