import { Router } from "express";
import { NewText} from "../types";
import { 
    readAlltexts,
    readOneText,
    createOneText,
    deleteOneText,
    updateText,
}from "../services/texts";

const router = Router();

router.get("/", (req, res)=>{ 
    const level= req.query["level"] as string;
    const texts=readAlltexts(level);
    return res.json(texts);
});

router.get("/:id" , (req,res)=>{ 
    const id = req.params.id;
    const text=readOneText(id);
    if(!text){ 
        return res.sendStatus(404);
    }
    return res.json(text);
});

router.post("/", (req,res)=>{ 
    const body: unknown = req.body; 
    if(!body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        typeof body.level !== "string" ||
        !body.content.trim() ||
        !body.level.trim()
    ){ 
        return res.sendStatus(400);
    }
    const { content, level }= body as NewText;
    const newText = createOneText({content, level});
    return res.json(newText);
});

router.delete("/:id", (req,res)=>{ 
    const id=req.params.id.toString();
    const deleted= deleteOneText(id);
    if (!deleted) {
        return res.sendStatus(404);
      }
    return res.json(deleted);
});

router.put("/:id", (req,res)=>{ 
    const id=req.params.id;
    const body : unknown = req.body;
    if(!body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        typeof body.level !== "string" ||
        !body.content.trim() ||
        !body.level.trim()
    ){ 
        return res.sendStatus(400);
    }
    const { content, level }= body as NewText;
    const newText = updateText(id,{content, level});
    if(!newText){ 
        return res.sendStatus(400);
    }
    return res.json(newText);

});

export default router;