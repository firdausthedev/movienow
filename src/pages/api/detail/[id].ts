import { NextApiRequest, NextApiResponse } from "next";
import { getDetail } from "@/lib/actions";
import { Detail } from "@/lib/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid ID" });
  }
  try {
    const movie: Detail = await getDetail(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
