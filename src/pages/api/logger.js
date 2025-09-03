export default function handler(req, res) {
  try {
    console.log(req.body)
    res.status(200).json({ message: 'Message logged successfully' })
  } catch {
    res.status(500).json({ message: 'Could not log the message' })
  }
}
