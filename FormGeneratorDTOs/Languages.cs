using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
  public  class Languages : CommonClass
    {
        public int Id { get; set; }
        public string language { get; set; }
        public string code { get; set; }
        public int status { get; set; }
    }
}
