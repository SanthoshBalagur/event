interface createDto{
    eventid:number;
    eventdateid:number;
    ticket_types : ticketTypes[]
    discount?:string;
}

interface ticketTypes{
    ticket_typeid:number;
    quantity:number;

}