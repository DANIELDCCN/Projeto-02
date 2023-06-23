import { AppDataSource } from "../../AppDataSource";
import { Products } from "../../entities/Products";

interface IDataProduct {
	nameProducts: string;
  }

async function insertProduct(dataProduct: IDataProduct){
	try{
	const productRepository = AppDataSource.getRepository(Products);

	const product: IDataProduct = dataProduct;

	productRepository.save(product);
	}catch(error){
		console.error("Erro ao persistir o produto " + error);
		return undefined;
	}
}

export { insertProduct };
