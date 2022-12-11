
class Directory {

    constructor(){    
        this.directories = {}
        this.files = {}
        this.parent = null
    }

    parse(){
        while (Directory.lines.length > 0)Directory.current = Directory.current.parseLine(Directory.lines.shift())
    }

    parseWithMinMaxSize(minSize, maxSize){
        let size = 0
        for (const fileSize of Object.values(this.files)) {
            size += fileSize
        }
        for (const dir of Object.values(this.directories)){
            size += dir.parseWithMinMaxSize(minSize, maxSize)
        }
        if (size <= maxSize && size >= minSize)Directory.result.push(size)
        return size
    }

    parseLine(ins){  
        if (ins.charAt(0) == '$'){
            const [_, instruction, path] = ins.split(" ")
            switch (instruction){
                case "cd":
                    if (path == "/")return Directory.root
                    if (path == "..")return Directory.current.parent
                    return this.directories[path]
                case "ls":
                    while (Directory.lines.length > 0 && Directory.lines[0].charAt(0) != '$'){
                        let f = Directory.lines.shift()
                        const [size, name] = f.split(" ")
                        if (size == "dir"){
                            if (this.directories[name] == undefined){
                                this.directories[name] = new Directory()
                                this.directories[name].parent = Directory.current
                            }
                        } else {
                            if (this.files[name] == undefined)this.files[name] = parseInt(size)
                        }
                    }
                    break;
            }
        }
        return Directory.current
    }
}

Directory.root = null
Directory.lines = null
Directory.current = null
Directory.result = []

module.exports = Directory