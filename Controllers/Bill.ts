import { BillService } from '../Services/Bill'
import { Request, Response, NextFunction } from 'express';
import { BaseController } from './BaseController';

const service = new BillService();

export class BillController extends BaseController {
    public getBill = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await service.findAll();
            this.sendResponse(result, req, res.status(200));
        } catch (error) {
            this.sendResponse(error, req, res.status(400));
        }

    }
    public create = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        try {
            const result = await service.create(id);
            this.sendResponse(result, req, res.status(200));
        } catch (error) {
            this.sendResponse(error, req, res.status(400));
        }
    }
}
