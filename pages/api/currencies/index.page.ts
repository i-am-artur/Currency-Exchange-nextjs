import { NextApiRequest, NextApiResponse } from "next";
import { AnyObject } from "typescript/models/common";

type Data = {
  name: AnyObject;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const currencies = require("./mockedCurrencies.json");
  res.status(200).json(currencies);
}
