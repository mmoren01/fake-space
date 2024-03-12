export default function handler(req, res) {
  const { id } = req.query
  const users = [
    {
      name: 'Mauricio',
      id: 1,
      age: 30,
      sex: 'Male',
      city: 'Glendale',
      state: 'Arizona',
      country: 'United States',
      friends: [ '2', '3', '4' ],
      posts: [],
    }
  ]

  const user = users.find(user => user.id === Number(id))
  res.status(200).json(user)
}