import { NextApiRequest, NextApiResponse } from "next";
import { getDetail, getVideo } from "@/lib/actions";
import { Detail, Video } from "@/lib/types";

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
    const video: Video = await getVideo(id);
    res.status(200).json({ data: { movie, video } });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
