import {readFile} from "fs/promises"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import {createClient} from "@supabase/supabase-js"
import "dotenv/config"

//nycklar får .env
const SUPABASE_URL = process.env.SUPABASE_URL 
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY 

try {
    const text = await readFile(`${process.cwd()}/cabin.txt`, "utf-8")
    console.log(text)

    const text_splitter =  new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        separators: ["/n/n","/n", " " ,""],
        chunkOverlap:50
    })

    const splittedText = await text_splitter.createDocuments([text])
    console.log(splittedText)

    if(SUPABASE_API_KEY && SUPABASE_URL !== undefined) {
        const supaBaseCLient = createClient(SUPABASE_URL, SUPABASE_API_KEY)
    }
    
} catch (error) {
    
}

