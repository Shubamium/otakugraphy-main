import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET() {
  revalidatePath("/", "layout");
  redirect("/");
  // return new Response("Revalidated", { status: 200 });
}
