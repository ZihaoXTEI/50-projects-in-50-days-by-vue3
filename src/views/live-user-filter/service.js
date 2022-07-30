export const getUserData = async () => {
  const res = await fetch('https://randomuser.me/api?results=50')
  const { results } = await res.json()

  const userList = []

  results.forEach((user) => {
    const uuid = user.login.uuid
    const imageUrl = user.picture.large
    const firstName = user.name.first
    const lastName = user.name.last
    const city = user.location.city
    const country = user.location.country
    const isShow = true

    userList.push({
      uuid,
      firstName,
      lastName,
      imageUrl,
      city,
      country,
      isShow
    })
  })

  return userList
}
