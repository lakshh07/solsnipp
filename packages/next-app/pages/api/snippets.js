// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import snipp from "../../utils/snipp.json";

export default function handler(req, res) {
  res.status(200).json(snipp);
}
