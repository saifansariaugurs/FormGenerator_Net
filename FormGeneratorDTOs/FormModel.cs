using System;

namespace FormGeneratorDTOs
{
    public class FormModel
    {
    }

   public class CommonClass
    {
        public int action { get; set; }
        public int created_by { get; set; }
        public int updated_by { get; set; }
        public Nullable< DateTime> created_at { get; set; }
        public Nullable<DateTime> updated_at { get; set; }

        public int res { get; set; }
        public string Message { get; set; }

        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
    }

}
