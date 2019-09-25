using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
   public class FormTable : CommonClass
    {
        public int FormId { get; set; }
        public int topicId { get; set; }
        public int applicationId { get; set; }
        public string title { get; set; }

        public string slug { get; set; }

        public string firebase_room_id { get; set; }

        public string formIcon { get; set; }

        public string formBackground { get; set; }

        public int backgroundTransparency { get; set; }

        public string xlsxFileName { get; set; }

        public string xlsFile { get; set; }

        public int formType { get; set; }

        public int status { get; set; }

        public string formTag { get; set; }

        public bool template { get; set; }
        public bool InformationOnly { get; set; }
        public int informationFormID { get; set; }
        public string informationFormName { get; set; }

        public bool subscriptionForm { get; set; }

        public int subscriptionFormID { get; set; }

        public int groupID { get; set; }

        public string css { get; set; }
        public string formDescription { get; set; }

        public bool eventOverlap { get; set; }

        public bool activitiesOverlap { get; set; }

        public int resourceForm { get; set; }

        public string majorGroup { get; set; }

        public string minorGroup { get; set; }

        public int activitiesForm { get; set; }

        public string activities { get; set; }
        public string activitiesCategory { get; set; }

        public string durationField { get; set; }

        public string overlapField { get; set; }

        public string fields { get; set; }
        public string html { get; set; }

        public string allowViewSummary { get; set; }

        public string allowChat { get; set; }

        public string allowNotification { get; set; }

        public string allowEmailNotification { get; set; }

        public string notificationDetail { get; set; }
        public string recordFilters { get; set; }

        public string recordAccessSecurity { get; set; }

        public string formSettings { get; set; }

        public DateTime? lastActivityDate { get; set; }

        public int height { get; set; }

        public int themeID { get; set; }

        public string themeJsFile { get; set; }

        public string form_password { get; set; }

        public string language { get; set; }

        public string screenMode { get; set; }

    }
}
