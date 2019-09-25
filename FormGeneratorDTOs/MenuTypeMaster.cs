using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
 public    class MenuTypeMaster : CommonClass
    {
        public int menutypeId { get; set; }
        public int userId { get; set; }
        public string type { get; set; }
        public DateTime? created_date { get; set; }
        public DateTime? modified_date { get; set; }

    }
}
