import prisma from '../prisma/client';

export const getAllCustomers = async () => {
    return prisma.customer.findMany();
};

export const getCustomerById = async (id: number) => {
    return prisma.customer.findUnique({ where: { id } });
};

export const createCustomer = async (data: { name: string; email: string }) => {
    return prisma.customer.create({ data });
};

export const updateCustomer = async (id: number, data: { name?: string; email?: string }) => {
    return prisma.customer.update({ where: { id }, data });
};

export const deleteCustomer = async (id: number) => {
    return prisma.customer.delete({ where: { id } });
};
