from fastapi import APIRouter, HTTPException

notes = [
    {"id": "1", "text": "Buy milk and don't forget to slap Gemini"},
    {"id": "2", "text": "Finish CRUD exercise and go home"},
    {"id": "3", "text": "Do a git commit before everything breaks"}
]

router = APIRouter()


@router.get("/notes")
def get_all_notes():
    return notes


@router.get("/notes/{notes_id}")
def get_note_by_id(notes_id):
    for note in notes:
        if note["id"] == notes_id:
            return note
    else:
        raise HTTPException(status_code=404 , detail="note nit found.")


@router.post("/notes/{note_id}")
def add_note(body : dict , note_id : str):
    if "text" not in body:
        raise HTTPException(status_code=400 , detail="the text need to be in your body message!.")
    for note in notes:
        if note["id"] == note_id:
            raise HTTPException(status_code=409 , detail=f"the {note_id} all ready exist.")
    else:
        notes.append({"id" : note_id , "text" : body["text"]})
        return f"the note successfully added!"

@router.put("/notes/{note_id}")
def update_note_by_id(note_id : str , body : dict):
    if "text" not in body:
        raise HTTPException(status_code=400 , detail=f"the text need to be in your body message!.")
    for note in notes:
        if note["id"] == note_id:
            note.update(body)
            return "your update finish"
    else:
        raise HTTPException(status_code=404 , detail=f"the {note_id} is not exist.")


@router.delete("/notes/{note_id}")
def delete_not_by_id(note_id : str):
    for note in notes:
        if note["id"] == note_id:
            notes.remove(note)
            return {"delete" : note_id}
    else:
        raise HTTPException(status_code=404 , detail=f"the {note_id} is not exist.")