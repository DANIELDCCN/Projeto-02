import { AppDataSource } from "../../AppDataSource";
import { Client } from "../../entities/Client";

interface IDataClient {
  idClient?: number;
  nameClient: string;
  cpfClient: string;
}

async function updateClient(client: IDataClient) {
  try {
    const clientRepository = AppDataSource.getRepository(Client);

    const clientExist = await clientRepository.findOneBy({
      idClient: client.idClient,
    });

    if (clientExist === null) {
      console.log("Clente não existe");
      return null;
    }

    clientExist.nameClient = client.nameClient;
    clientExist.cpfClient = client.cpfClient;
    return clientRepository.save(clientExist);
  } catch (error) {
    return undefined;
  }
}

export { updateClient };
