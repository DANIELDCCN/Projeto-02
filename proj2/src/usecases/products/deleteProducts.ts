import { AppDataSource } from "../../AppDataSource";
import { Products } from "../../entities/Products";

interface IDataProduct {
  idProducts?: number;
  nameProducts: string;
}

async function deleteProduct(product: IDataProduct){
    try{
    const productRepository = AppDataSource.getRepository(Products);

    const productExist = await productRepository.findOneBy({
      idProducts: product.idProducts,
    });

    if (productExist === null) {
      console.log("Produto não existe");
      return null;
    }
    return productRepository.delete(productExist);
  } catch (error) {
    return undefined;
  }
}

export { deleteProduct };