const posts = [
  {
    id: 1,
    author: 'Jack',
    authorId: 1,
    content: 'This is the first post',
    comments: [ 1, 2, 3 ],
    date: Date.now(), 
  }
]

export default function handler(req, res) {
  res.status(200).json(posts)
}