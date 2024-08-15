import { NextResponse } from "next/server";
import OpenAI from "openai";

// Define the system prompt
const systemPrompt = `
You are a flashcard creator. You take in text and create exactly 10 flashcards from it. 
Both the front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards": [
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

// Define the POST function
export async function POST(req) {
  // Create a new OpenAI instance with the API key
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure you have the API key in your environment variables
  });

  // Extract the request data
  const data = await req.text();

  // Call the OpenAI API to create the flashcards
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    model: "gpt-4",
  });

  // Parse the OpenAI response
  const flashcards = JSON.parse(completion.choices[0].message.content);

  // Return the flashcards as JSON
  return NextResponse.json(flashcards.flashcards);
}
