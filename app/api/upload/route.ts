import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME!;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET!;

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const result = await res.json();

  console.log("CLOUDINARY RESULT:", result);

  if (!result.secure_url) {
    return NextResponse.json(
      { error: "Upload failed", details: result },
      { status: 500 }
    );
  }

  return NextResponse.json({
    url: result.secure_url,
    publicId: result.public_id,
    type: result.resource_type,
  });
}