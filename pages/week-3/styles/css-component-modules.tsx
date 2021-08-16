import Image from 'next/image';
import CardList from '../../../components/CardList';
import Card from '../../../components/Card';

interface Cats {
  name: string,
  bio: string,
  url: string
}

export default function SSRCats({ cats }: { cats: Cats[] }) {

  return (
    <CardList>
      {cats.map((cat) => {
        return (
          <Card key={cat.name+cat.url}>
            <Image src={cat.url} layout="fill" />
            <div>{cat.name}</div>
            <div>{cat.bio}</div>
          </Card>
        )
      })}
    </CardList>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(`https://thatcopy.pw/catapi/rest/`);
  const result = await res.json();

  const cats: Cats[] = [
    {
      name: "Tibles",
      bio: "Social media expert. Wannabe pop culture ninja. Student. Organizer. Writer. Music junkie.",
      url: result.url//catUrlList[0]
    },
    {
      name: "Jelly",
      bio: "Hipster-friendly bacon advocate. Web lover. Creator. Zombie ninja. Devoted writer. Extreme beer buff. General travel evangelist.",
      url: result.url//catUrlList[1]
    },
    {
      name: "Night",
      bio: "Baconaholic. Social media geek. Problem solver. Passionate gamer. Twitter fanatic. Coffee ninja.",
      url: result.url//catUrlList[2]
    },
    {
      name: "Kiwi",
      bio: "Communicator. Alcohol fanatic. Devoted tv scholar. Social media evangelist. Web trailblazer. Analyst.",
      url: result.url//catUrlList[3]
    },
  ]

  // Pass data to the page via props
  return { props: { cats } }
}