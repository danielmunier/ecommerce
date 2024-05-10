import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { name } = body;
    console.log(name)

    if(!name) {
        return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prismadb.store.create({
        data: {
            name,
            userId
        }
    });

    return NextResponse.json(store)

  } catch (error) {
    console.log("[STORES_ERROR] ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
