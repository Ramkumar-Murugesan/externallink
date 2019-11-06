import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class ticketController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/ticket/get/:id', this.GpGetNounById);
this.router.post('/ticket/save', this.GpCreate);
    }

public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpGetNounById');
        new ApiAdaptar().get(Constant.TICKETURL + `${req.url}` ).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpCreate');
        new ApiAdaptar().post(Constant.TICKETURL + `${req.url}` , req.body).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }




}
