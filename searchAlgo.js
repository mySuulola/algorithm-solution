const googleDatabase = [
  'cats.com',
  'soup.com',
  'ourcats.com',
  'beautifulcats.com',
  'nigeria.com'
]

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchInput)
  })
  return matches
}

console.log(
  googleSearch("")
) 