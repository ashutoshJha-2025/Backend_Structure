import { app } from '../src/app.js'
import { Note } from './note.model.js'

app.use(express.json())

app.post('/notes', async (req, res) => {
    const data = req.body
    await Note.create({
        title: data.title,
        description: data.description,
    })

    res.status(201).json({
        message: "Note created at db"
    })
})

app.get('/notes', async (req, res) => {
    const notes = await Note.find()   // .find() always returns an array
    res.status(200).json(
        {
            message: 'notes[] fetched successfully',
            note: notes
        }
    )
})

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id
    await Note.findByIdAndDelete(id)
    res.status(200).json({
        message: `Note of id ${id} got deleted`
    })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id
    const desc = req.body.description

    await Note.findOneAndUpdate({ _id: id }, { description: desc })
    res.status(200).json({
        message: 'Note updated successfully'
    })
})