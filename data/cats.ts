export interface Cat {
  id?: string,
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
    name: "Tibles",
    bio: "Social media expert. Wannabe pop culture ninja. Student. Organizer. Writer. Music junkie."
  },
  {
    name: "Jelly",
    bio: "Hipster-friendly bacon advocate. Web lover. Creator. Zombie ninja. Devoted writer. Extreme beer buff. General travel evangelist."
  },
  {
    name: "Night",
    bio: "Baconaholic. Social media geek. Problem solver. Passionate gamer. Twitter fanatic. Coffee ninja.",
  },
  {
    name: "Kiwi",
    bio: "Communicator. Alcohol fanatic. Devoted tv scholar. Social media evangelist. Web trailblazer. Analyst.",
  },
]

export const getCatByName = (catName: string) => {
  return CATS.find((cat) => {
    return cat.name === catName });
}

export default CATS;