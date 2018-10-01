import faker from 'faker/locale/zh_CN'

const pageSize = 200
const host = 'http://picsum.photos'

function fakerData (start = 0) {
  const a = []
  for (let i = start; i < start + pageSize; i++) {
    const rw = (1 + Math.random()) * 100
    const rh = (1 + Math.random()) * 100

    a.push({
      id: i,
      image: `${host}/${Math.trunc(rw)}/${Math.trunc(rh)}`,
      words: faker.lorem.words(),
      paragraphs: faker.lorem.sentences()
    })
  }

  return a
}

export default fakerData
