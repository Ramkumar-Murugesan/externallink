import { Request, Response } from 'express';
import {ticketDao} from '../dao/ticketDao';
import { CustomLogger } from '../config/Logger'
let ticket = new ticketDao();

export class ticketService {
    
    constructor() { }
    
    public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpGetNounById')
     const  ticketId = req.params.id;
     ticket.GpGetNounById(ticketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpCreate')
     const  ticketData = req.body;
     ticket.GpCreate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpCreate')
         callback(response);
         });
    }


}