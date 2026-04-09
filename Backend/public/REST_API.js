import { app } from "../src/app";

app.use(express.json())

const notes = [
    {
        title: 'note 1',
        description: 'testing with postman',
    },
]

// POST /notes :- server par data send karne ke liye
app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: "note created successfully"
    })
})

// GET /notes :- server se data fetch krne ke liye
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'notes fetched successfully',
        notes: notes,
    })
})

// DELETE /notes :- server par data delete krne ke liye
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]
    res.status(200).json({
        message: `note deleted at index ${index} successfully`
    })
})

// PATCH /notes :- server par data update karne ke liye
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description

    res.status(200).json({
        message: 'note updated successfully'
    })
})