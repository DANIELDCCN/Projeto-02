import { Request, Response } from "express";
import { findAllProducts } from "../usecases/products/findAllProducts";
import { insertProduct } from "../usecases/products/insertProducts";
import { updateProduct as productUpdate } from "../usecases/products/updateProducts";
import { deleteProduct as productDelete } from "../usecases/products/deleteProducts";

interface IDataProduct {
  idProducts?: number;
  nameProducts: string;
}

async function getProducts(req: Request, res: Response) {
  const products = await findAllProducts();

  if (products) return res.send(products);

  return res.status(404).send({
    Error: "Unable to find all products",
    status: 404,
  });
}

async function createProduct(req: Request, res: Response) {
  const dataProduct: IDataProduct = req.body;

  const result = await insertProduct(dataProduct);

  if (result) {
    return res.status(201).send("Produto criado");
  } else {
    return res.status(404).send({});
  }
}

async function updateProduct(req: Request, res: Response) {
  const dataProduct: IDataProduct = req.body;

  dataProduct.idProducts = Number(req.params.id);

  const result = await productUpdate(dataProduct);

  if (result) {
    return res.send("Produto atualizado!");
  } else {
    return res.status(404).send("Erro ao atualizar");
  }
}

async function deleteProduct(req: Request, res: Response) {
  const dataProduct: IDataProduct = req.body;

  dataProduct.idProducts = Number(req.params.id);

  const result = await productDelete(dataProduct);

  if (result) {
    return res.send("Produto excluido!");
  } else {
    return res.status(404).send("Erro ao excluir");
  }
}

export { getProducts, createProduct, updateProduct, deleteProduct };
