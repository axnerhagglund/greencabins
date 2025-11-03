// import {readFile} from "fs/promises"
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
// import {createClient} from "@supabase/supabase-js"
// import {SupabaseVectorStore} from "@langchain/community/vectorstores/supabase"
// import { OllamaEmbeddings } from "@langchain/ollama"
// import "dotenv/config"
// import { setGlobalDispatcher, Agent } from "undici";

// //nycklar får .env
// const SUPABASE_URL = process.env.SUPABASE_URL 
// const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY 

// try {
//     const text = await readFile(`${process.cwd()}/cabin.txt`, "utf-8")
//     console.log(text)

//     const text_splitter =  new RecursiveCharacterTextSplitter({
//         chunkSize: 1000, //stort nog för att stugorna ska hålla ihop 
//         separators: ["\n\n", "\n", ".", " "],
//         chunkOverlap:100 // litet överlapp för att inte missa context mellan stugorna
//     })

//     const splittedText = await text_splitter.createDocuments([text])
//     console.log(splittedText)
//     setGlobalDispatcher(new Agent({ headersTimeout: 420_000, bodyTimeout: 800_000 }));
//     if(SUPABASE_API_KEY && SUPABASE_URL !== undefined) {
//         const supabaseClient = createClient(SUPABASE_URL, SUPABASE_API_KEY)
        
//          await SupabaseVectorStore.fromDocuments(
//             splittedText,
//             new OllamaEmbeddings({model: "llama3.1:8b"}),
//             { client: supabaseClient, tableName: "documents" }

//             );
//     }
    
// } catch (error) {
//     console.error("Import failed:", error);
//     process.exit(1);
// }

