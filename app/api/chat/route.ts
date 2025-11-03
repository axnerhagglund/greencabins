
import { openai } from "@ai-sdk/openai";
import { streamText, UIMessage, convertToModelMessages } from "ai"

// tillåt streaming svar upp till 30 sekunder
export const maxDuration = 30;

export async function POST(req: Request){
    const { messages }: { messages: UIMessage[] } = await req.json()

    const result = streamText({
        model: openai("gpt-4o"),
        messages: convertToModelMessages(messages)
    })

    return result.toUIMessageStreamResponse()
}