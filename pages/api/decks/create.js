// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data, storgage } from "@serverless/cloud";
import { idGenerator } from "utils/idGenerator";

export default async function handler(req, res) {
  const { name, files } = req.body;
  const id = idGenerator();
  try {
    const newDeck = await data.set(`deck:${id}`, { name });
    console.log("NEW DECK:", newDeck);
    res.status(201).send(newDeck);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
  // const fileBuff = req.files[0].buffer;

  // if (!fileBuff) {
  //   return res.status(400).send("No file");
  // }
  // try {
  //   await storage.write(path, fileBuff);
  //   return res.sendStatus(200);
  // } catch (error) {
  //   console.error(error);
  //   return res.status(500).send(error.message);
  // }
}
