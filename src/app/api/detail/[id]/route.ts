import { getDetail } from "@/lib/actions";
import { Detail } from "@/lib/types";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  if (!id) {
    return Response.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const movie: Detail = await getDetail(id);
    return Response.json(movie, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
