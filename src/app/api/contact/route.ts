import { NextResponse } from "next/server";
// import { db } from "@/db";
// import { contacts } from "@/db/schema";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, service, message } = body;

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Имя, email и сообщение обязательны" },
//         { status: 400 }
//       );
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: "Некорректный email адрес" },
//         { status: 400 }
//       );
//     }

//     await db.insert(contacts).values({
//       name,
//       email,
//       phone: phone || null,
//       service: service || null,
//       message,
//     });

//     return NextResponse.json({ success: true }, { status: 201 });
//   } catch (err) {
//     console.error("Contact form error:", err);
//     return NextResponse.json(
//       { error: "Произошла ошибка. Попробуйте позже." },
//       { status: 500 }
//     );
//   }
// }

export async function POST() {
  return NextResponse.json(
    { error: "Форма временно отключена" },
    { status: 503 }
  );
}
