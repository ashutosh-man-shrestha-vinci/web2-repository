import path from "node:path";
import {v4 as uuidv4} from 'uuid';
import { Text, NewText } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
    {
        id: "63efe595-b914-44d7-b753-d62ca0f1b271",
        content: "dfdfd",
        level: "easy",
    },
    {
        id: "fa604b8e-a7e8-4fc8-874e-2d9fc1e859e6",
        content: "flemme",
        level: "medium",
    },
    {
        id: "b3430b4c-423c-43da-9e78-7142c27e257b",
        content: "iron woman",
        level: "hard",
    },
];

function readAlltexts(level? : string): Text[]{ 
    const texts = parse(jsonDbPath, defaultTexts);
    if(!level){ 
        return texts;
    }
    const filtered = texts.filter((text)=>{
        return text.level.toLowerCase() === level.toLowerCase();
    });
    return filtered;
}

function readOneText(id : string): Text | undefined{ 
    const texts = parse(jsonDbPath, defaultTexts);
    return texts.find((text)=> text.id.toString()===id);

}

function createOneText(newText: NewText): Text { 
    const texts=parse(jsonDbPath, defaultTexts);
    const text: Text = {
        id: uuidv4(),
        ...newText,
    };
    texts.push(text);
    serialize(jsonDbPath, texts);
    return text;
}

function deleteOneText(id: string): Text | undefined{ 
    const texts = parse(jsonDbPath, defaultTexts);
    const index= texts.findIndex((text)=>text.id.toString()===id);
    if(index === -1){ 
        return undefined;
    }
    const deletedElements = texts.splice(index, 1);
    serialize(jsonDbPath, texts);
    return deletedElements[0];
}

function updateText(id : string, newText: Partial<NewText>): Text | undefined{ 
    const texts = parse(jsonDbPath, defaultTexts);
    const text= texts.find((text)=>text.id.toString()===id);
    if(!text){ 
        return undefined;
    }
    if(newText.content !==  undefined){ 
        text.content=newText.content;
    }
    if(newText.level !==  undefined){ 
        text.level=newText.level;
    }
    serialize(jsonDbPath, texts);
    return text;
}

export{
    readAlltexts,
    readOneText,
    createOneText,
    deleteOneText,
    updateText,
};