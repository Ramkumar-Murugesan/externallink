import { Request, Response } from 'express';
import { ticketService } from '../service/ticketService';
import { CustomLogger } from '../config/Logger'
let ticket = new ticketService();

export class ticketController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
ticket.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpCreate');
    })}


}