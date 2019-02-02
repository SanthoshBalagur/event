export class prepare{
    eventid:number;
    eventdateid:number;
}

export interface prepareResult{
    payment_options:Payments[];
    tickettypes:tickettype[];
    discount_enabled?:string;
    tax_enabled:boolean;
    tax?:tax[];
}

export interface tickettype{

    tickettype_id: number;
    tickettype_name: string;
    tickettype_price: number;
    tickettype_min_limit: number;
    tickettype_max_limit: number;
    tickettype_avail_quantity: number;
    tickettype_onsale: boolean;
    
}

export interface Payments{
    paymentoption_id:number;
    paymentoption_name:string;
}

export interface tax{
    tax_type: string;
    tax_name: string;
    tax_value: string;
}