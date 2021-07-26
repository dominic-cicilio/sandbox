import Image from 'next/image';

interface Cats {
  name: string,
  bio: string,
  url: string
}

const GridStyle = {
  "margin": "50px",
  "display": "grid"
}

const CardStyle = {
  width: '200px',
  height: '300px',
}

export default function SSRCats({ cats }: { cats: Cats[] }) {

  console.log(cats);

  return (
    <div style={GridStyle}>
      {cats.map((cat) => {
        return (
          <div style={CardStyle}>
            <img src={cat.url} width="60px" />
            <div>{cat.name}</div>
            <div>{cat.name}</div>
          </div>
        )
      })}
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const catImageResponseList = await Promise.all([
  //   fetch(`https://thatcopy.pw/catapi/rest/`),
  //   fetch(`https://thatcopy.pw/catapi/rest/`),
  //   fetch(`https://thatcopy.pw/catapi/rest/`),
  //   fetch(`https://thatcopy.pw/catapi/rest/`),
  // ])
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
      name: "Night",
      bio: "Communicator. Alcohol fanatic. Devoted tv scholar. Social media evangelist. Web trailblazer. Analyst.",
      url: result.url//catUrlList[3]
    },
  ]

  // Pass data to the page via props
  return { props: { cats } }
}