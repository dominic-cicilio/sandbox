export interface Cat {
  id: string,
  name: string,
  bio: string,
  url?: string,
  imageName?: string
}

export interface CatResponseData {
  id: number,
  url: string,
  webpurl: string,
  x: number,
  y: number
}

const CATS: Cat[] = [
  {
    id: 'a',
    name: "Tibles",
    bio: "Social media expert. Wannabe pop culture ninja. Student. Organizer. Writer. Music junkie."
  },
  {
    id: "b",
    name: "Jelly",
    bio: "Hipster-friendly bacon advocate. Web lover. Creator. Zombie ninja. Devoted writer. Extreme beer buff. General travel evangelist."
  },
  {
    id: "c",
    name: "Night",
    bio: "Baconaholic. Social media geek. Problem solver. Passionate gamer. Twitter fanatic. Coffee ninja.",
  },
  {
    id: "d",
    name: "Kiwi",
    bio: "Communicator. Alcohol fanatic. Devoted tv scholar. Social media evangelist. Web trailblazer. Analyst.",
  },
]

export const getCatByName = (catName: string) => {
  return CATS.find((cat) => {
    return cat.name === catName });
}

export const getCatById = (catId: string) => {
  return CATS.find((cat) => {
    return cat.id === catId });
}

export default CATS;