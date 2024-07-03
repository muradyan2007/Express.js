import { Request, Response } from 'express';
import {Link} from '../models/linksModel';

const validateUrl = (url:string) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
};

export const getOne = (req: Request, res: Response): void => {
    const id = req.params.id;
    const link = Link.getOne(Number(id));
    if (link) {
        res.status(200).json(link);
    } else {
        res.status(404).send('Link not found');
    }
};

export const getAll = (_req: Request, res: Response): void => {
    const links = Link.getAll();
    res.status(200).json(links);
};

export const createOne = (req: Request, res: Response): void => {
    const { shortLink, longLink } = req.body;

    if (validateUrl(shortLink) && validateUrl(longLink)) {
        const createdLink = Link.createOne(shortLink, longLink);
        res.status(201).json(createdLink);
    }
};


export const deleteOne = (req: Request, res: Response): void => {
    const id = req.params.id;
    const deleted = Link.deleteOne(Number(id));
    if (deleted) {
        res.status(200).send('Link deleted');
    } else {
        res.status(404).send('Link not found');
    }
};

export const updateOne = (req: Request, res: Response): void => {
    const id = req.params.id;
    const updatedLink = req.body;
    const updated = Link.updateOne(Number(id), updatedLink);
    if (updated) {
        res.status(200).json(updated);
    } else {
        res.status(404).send('Link not found');
    }
};
