import { AppDataSource } from "../../AppDataSource";
import { Client } from "../../entities/Client";

interface IDataClient {
    idClient?: number;
    nameClient: string;
    cpfClient: string;
  }

async function deleteClient(client: IDataClient){
    try{
    const clientRepository = AppDataSource.getRepository(Client);

    const clientExist = await clientRepository.findOneBy({
      idClient: client.idClient,
    });

    if (clientExist === null) {
      console.log("Clente não existe");
      return null;
    }
    return clientRepository.delete(clientExist);
  } catch (error) {
    return undefined;
  }
}

export { deleteClient };