import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

interface Cat {
  name: string,
  bio: string,
  url: string,
  imageName: string
}

export interface SSREmotionProps {
  cats: Cat[]
}

const Container = styled.div`
  overflow: "hidden";
  max-width: "100%";
  width: "450px";
`;

const CardList = styled.div`
  padding: 40px;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  place-items: center;
  grid-row-gap: 40px;
`;

const CardItem = styled.div`
  background-color: white;
  position: relative;
  display: grid;
  grid-template-columns: 300px 600px;
  border-radius: $border-radius;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);

  .image-container {
    position: relative;
    height: 200px;
    width: 300px;
    /* background-color: #bbbbbb; */
    overflow: hidden;

    img {
      height: 300px;
      overflow: hidden;
      border-radius: $border-radius 0 0 $border-radius;
    }
  }



  .btn {
    position: absolute;
    bottom: -20px;
    right: -20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    background-color: #fc9400;
    color: white;
    padding: 22px 45px;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: $border-radius;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.294);

    i {
      margin-left: 20px;
      font-size: 1.5rem;
    }
  }

  .container__text {
    padding: 40px 40px 0;

    h1 {
      color: $black-color;
      font-weight: 400;
    }
    .container__text__star span {
      font-size: 0.8rem;
      color: #ffa800;
      margin: -5px 0 20px;
    }

    p {
      font-size: 0.9rem;
    }

    .container__text__timing {
        display: flex;
        margin: 20px 0 10px;
        .container__text__timing_time {
        margin-right: 40px;
      }

      h2 {
        margin-bottom: 5px;
        font-size: 1rem;
        font-weight: 400;
        color: #818189;
      }

      p {
        color: black;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
`;


const SSREmotion: React.FC<SSREmotionProps> = ({cats}) => {
  return (
    <Container>
      <CardList>
        {cats.map((cat: Cat) => {
          console.log("/"+cat.imageName);
          return (
            <CardItem key={cat.name+cat.url}>
              <div className="image-container">
                <Image src={cat.url} layout="fill" />
              </div>
              <div className="container__text">
                <h1>{cat.name}</h1>
                <p>{cat.bio}</p>
              </div>

              <button className="btn">More Info</button>
            </CardItem>
          )
        })};
      </CardList>
    </Container>
   );
}

export async function getStaticProps() {
  // Fetch data from external API
  const catImageResponseList = await Promise.all([
    fetch(`https://thatcopy.pw/catapi/rest/`),
    fetch(`https://thatcopy.pw/catapi/rest/`),
    fetch(`https://thatcopy.pw/catapi/rest/`),
    fetch(`https://thatcopy.pw/catapi/rest/`),
  ]);

  const catUrlsPromises: Promise<string>[] = catImageResponseList.map(async (catResponse) => {
    const cat = await catResponse.json();
    return cat.url;
  });

  const catUrls: string[] = await Promise.all(catUrlsPromises)

  const catImageNames: string[] = catUrls.map((imageUrl) => {
    const imageName = (imageUrl.split('/')).pop();
    if (imageName === undefined) return '';

    return imageName;
  })


  // const res = await fetch(`https://thatcopy.pw/catapi/rest/`);
  // const result = await res.json();

  const cats: Cat[] = [
    {
      name: "Tibles",
      bio: "Social media expert. Wannabe pop culture ninja. Student. Organizer. Writer. Music junkie.",
      url: catUrls[0],
      imageName: catImageNames[0]
    },
    {
      name: "Jelly",
      bio: "Hipster-friendly bacon advocate. Web lover. Creator. Zombie ninja. Devoted writer. Extreme beer buff. General travel evangelist.",
      url: catUrls[1],
      imageName: catImageNames[1]
    },
    {
      name: "Night",
      bio: "Baconaholic. Social media geek. Problem solver. Passionate gamer. Twitter fanatic. Coffee ninja.",
      url: catUrls[2],
      imageName: catImageNames[2]
    },
    {
      name: "Kiwi",
      bio: "Communicator. Alcohol fanatic. Devoted tv scholar. Social media evangelist. Web trailblazer. Analyst.",
      url: catUrls[3],
      imageName: catImageNames[3]
    },
  ]

  // Pass data to the page via props
  return { props: { cats } }
}

export default SSREmotion;