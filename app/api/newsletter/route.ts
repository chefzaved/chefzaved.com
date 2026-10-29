import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const NEWSLETTER_FILE = path.join(DATA_DIR, "subscribers.json");

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let subscribers: string[] = [];
    if (fs.existsSync(NEWSLETTER_FILE)) {
      try {
        subscribers = JSON.parse(fs.readFileSync(NEWSLETTER_FILE, "utf-8"));
      } catch (e) {
        subscribers = [];
      }
    }

    const cleanEmail = email.trim().toLowerCase();
    if (!subscribers.includes(cleanEmail)) {
      subscribers.push(cleanEmail);
      fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
    }

    return NextResponse.json({
      success: true,
      message: "You have been added to Chef Zaved's private culinary salon circle.",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Failed to subscribe." },
      { status: 500 }
    );
  }
}
