import { Response } from "express";

export class BaseController {

    protected ok(res: Response, data: any, message = "Success") {
        return res.status(200).json({
            success: true,
            message,
            data
        });
    }

    protected created(res: Response, data: any, message = "Created") {
        return res.status(201).json({
            success: true,
            message,
            data
        });
    }

    protected badRequest(res: Response, message = "Bad Request") {
        return res.status(400).json({
            success: false,
            message
        });
    }

    protected serverError(res: Response, error: any) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}