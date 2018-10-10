import faker from 'faker/locale/zh_CN'

const pageSize = 200
const host = 'http://picsum.photos'

const words = []
const paragraphs = []
const images = []

function fakerData (start = 0, useImage = true) {
  const a = []
  for (let i = start; i < start + pageSize; i++) {
    const rw = (1 + Math.random()) * 100
    const rh = (1 + Math.random()) * 100

    a.push({
      id: i,
      image: useImage ? images[i] || (images[i] = `${host}/${Math.trunc(rw)}/${Math.trunc(rh)}`) : undefined,
      words: words[i] || (words[i] = faker.lorem.words()),
      paragraphs: paragraphs[i] || (paragraphs[i] = Math.random() <= 0.5 ? faker.lorem.paragraphs() : faker.lorem.sentences())
    })
  }

  return a
}

export default fakerData
