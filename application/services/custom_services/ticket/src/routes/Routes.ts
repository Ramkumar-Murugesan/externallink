import { Request, Response, NextFunction } from "express";
import { ticketController } from '../controller/ticketController';


export class Routes {
    private ticket: ticketController = new ticketController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ticket/get/:id').get(this.ticket.GpGetNounById);
app.route('/ticket/save').post(this.ticket.GpCreate);
     }

}