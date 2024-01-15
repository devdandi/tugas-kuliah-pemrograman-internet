import type { FastifyRequest } from "fastify";

export interface CREATE_CATEGORIES {
  Body: {
    name: string;
  };
}

export interface UPDATE_CATEGORIES {
  Params: {
    id: string;
  };
  Body: {
    name: string;
  };
}

export interface READ_CATEGORIES {
  Params: {
    id: string;
  };
  Querystring: {
    page: number;
    limit: number;
  };
}

export interface DELETE_CATEGORIES {
  Params: {
    id: string;
  };
}

export interface CREATE_SUPPLIERS {
  Body: {
    name: string;
  };
}

export interface UPDATE_SUPPLIERS {
  Params: {
    id: string;
  };
  Body: {
    name: string;
  };
}

export interface READ_SUPPLIERS {
  Params: {
    id: string;
  };
  Querystring: {
    page: number;
    limit: number;
  };
}

export interface DELETE_SUPPLIERS {
  Params: {
    id: string;
  };
}

export interface RESTOCK_PRODUCT_SUPPLIERS {
  Params: {
    productId: string | undefined;
  };
  Body: {
    stocks: number;
  };
}

export interface CREATE_PRODUCTS {
  Body: {
    categoryId: string;
    supplierId: string;
    name: string;
    stocks: number;
    price: number;
  };
}

export interface UPDATE_PRODUCTS {
  Params: {
    id: string;
  };
  Body: {
    categoryId: string;
    supplierId: string;
    name: string;
    stocks: number;
    price: number;
  };
}

export interface READ_PRODUCTS {
  Params: {
    id: string;
  };
  Querystring: {
    page: number;
    limit: number;
  };
}

export interface DELETE_PRODUCTS {
  Params: {
    id: string;
  };
}

export interface READ_TRANSACTION {
  Params: {
    id: string;
  };
  Querystring: {
    page: number;
    limit: number;
  };
}

export interface CREATE_TRANSACTION {
  Body: {
    productId: string;
    quantities: number;
  };
}

export interface Response<T> {
  status: boolean;
  count: number;
  total_pages: number;
  data: T;
}
