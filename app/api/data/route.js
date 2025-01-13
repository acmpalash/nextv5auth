// app/api/data/route.js
import { auth } from "@clerk/nextjs";
import dbConnect from "@/utils/dbConnect"; // Adjust path to your `dbConnect` utility
import User from "@/models/user.model"; // Adjust path to your `user.model.js`

export async function GET(req) {
  try {
    // Authenticate user with Clerk
    const { userId } = auth();

    if (!userId) {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), {
        status: 401,
      });
    }

    // Connect to the database
    await dbConnect();

    // Fetch user data from MongoDB
    const users = await User.find().lean();
    return new Response(JSON.stringify({ success: true, data: users }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    // Authenticate user with Clerk
    const { userId } = auth();

    if (!userId) {
      return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), {
        status: 401,
      });
    }

    // Parse the request body
    const body = await req.json();

    // Connect to the database
    await dbConnect();

    // Create a new user in MongoDB
    const newUser = await User.create(body);
    return new Response(JSON.stringify({ success: true, data: newUser }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}