export class CommonInterface{
    action?:number;
    res?:number;
    Message?:string;
    created_by:number;
    updated_by:number;
    created_at:Date;
    updated_at:Date;
}

export class ApplicationTable extends CommonInterface{
    applicationId:number;
    applicationTitle:string;
    applicationTag:string;
    publicTemplate:boolean;
    protectedApplication:boolean;
    status:number;
    cycle:number;
    rowOrder:number;
    xlsFile:string;  
}

export class TopicTable extends CommonInterface{
    applicationId:number;
    topicTitle  :string;
    topicDescription:string;
    topicField:string;    
    TopicId:number;
}
