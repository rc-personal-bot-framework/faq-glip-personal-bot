import Faq from 'ringcentral-personal-chatbot-skill-faq/dist/server/model.js'
import { Service as User } from 'ringcentral-personal-chatbot/dist/server/models/Service'

const tree = {
  faq: Faq,
  user: User
}

export async function dataImport (req, res) {
  const {
    type,
    data
  } = req.body
  const Db = tree[type]
  const r = await Db.create(data)
  res.send(r)
}

export async function viewFaqs (req, res) {
  const list = await Faq.findAll()
  res.send(list)
}
