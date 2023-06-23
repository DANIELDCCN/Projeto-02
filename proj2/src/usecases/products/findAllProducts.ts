import { AppDataSource } from "../../AppDataSource";
import { Products } from "../../entities/Products";

async function findAllProducts() {
	const productsRepository =  AppDataSource.getRepository(Products);

	try {
		const products = await productsRepository.find();
		
		return products;
	} catch (error) {
		console.error("Erro no findAllProducts " + error);
		return undefined;
	}
}

export { findAllProducts };