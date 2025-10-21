import {readFile} from "fs/promises"


try {
    const text = await readFile(`${process.cwd()}/cabin.txt`, "utf-8")
    console.log(text)
} catch (error) {
    
}