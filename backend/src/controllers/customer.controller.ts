import { Request, Response } from 'express';
import * as customerService from '../services/customer.service';

export const getAll = async (req: Request, res: Response) => {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
};

export const getById = async (req: Request, res: Response) => {
    const customer = await customerService.getCustomerById(Number(req.params.id));
    customer ? res.json(customer) : res.status(404).json({ error: 'Customer not found' });
};

export const create = async (req: Request, res: Response) => {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
};

export const update = async (req: Request, res: Response) => {
    const customer = await customerService.updateCustomer(Number(req.params.id), req.body);
    res.json(customer);
};

export const remove = async (req: Request, res: Response) => {
    await customerService.deleteCustomer(Number(req.params.id));
    res.status(204).send();
};
