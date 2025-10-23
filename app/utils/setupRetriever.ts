import "dotenv/config";
import { OllamaEmbeddings } from "@langchain/ollama";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";
import { create } from "domain";


const SUPABASE_URL = process.env.VITE_SUPABASE_URL! // ! lovar att det finns i typescritp

const SUPABASE_API_KEY = process.env.VITE_SUPABASE_API_KEY!

const embeddings = new OllamaEmbeddings({model: "llama3.1:8b"})
const supabaseClient = createClient( SUPABASE_URL,SUPABASE_API_KEY )
const vectorstore = new SupabaseVectorStore( embeddings, {
    client: supabaseClient,
    tableName: "documents",
    queryName: "match_documents",

})

const retrieveDocuments = vectorstore.asRetriever()

export { retrieveDocuments }