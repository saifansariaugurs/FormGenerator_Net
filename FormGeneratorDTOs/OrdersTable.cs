using System;
using System.Collections.Generic;
using System.Text;

namespace FormGeneratorDTOs
{
    public class OrdersTable : CommonClass
    {
        public int orderId { get; set; }
        public int userId { get; set; }
        public int planId { get; set; }
        public string token { get; set; }
        public string PayerId { get; set; }
        public decimal amount { get; set; }
        public string ack { get; set; }
        public string correlationId { get; set; }
        public string profileId { get; set; }
        public string profileStatus { get; set; }
        public DateTime? nextBillingDate { get; set; }
        public string otherInformation { get; set; }
        public DateTime? created_date { get; set; }
        public DateTime? modify_date { get; set; }
    }
}
