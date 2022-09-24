import express 
from 'express'

const app = express()
const PORT = process.env.PORT || 3333

app.get('/', (request, response) => {
  return response.json({ message: 'Hello There!!!' })
})

app.listen(PORT, () => console.log(`Server up on port ${PORT}`))

