import { readLines } from "https://deno.land/std@0.197.0/io/read_lines.ts"
import * as path from "https://deno.land/std@0.197.0/path/mod.ts"

const NWorker = 2

const workers: Worker[] = []

const filename = path.join(Deno.cwd(), "./accounts.txt")
const fileReader = await Deno.open(filename)

for await (const line of readLines(fileReader)) {
    
}