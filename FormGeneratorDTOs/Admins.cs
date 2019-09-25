using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
   public class Admins : CommonClass
    {
        public int Id { get; set; }
        public int name { get; set; }

        public string email { get; set; }

        public string password { get; set; }
    }
}
