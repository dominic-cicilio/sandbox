import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

interface Cat {
  name: string,
  bio: string
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

const cats: Cat[] = [
  {
    name: "Tibles",
    bio: "Social media expert. Wannabe pop culture ninja. Student. Organizer. Writer. Music junkie."
  },
  {
    name: "Jelly",
    bio: "Hipster-friendly bacon advocate. Web lover. Creator. Zombie ninja. Devoted writer. Extreme beer buff. General travel evangelist.",
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


const SSREmotion: React.FC<SSREmotionProps> = () => {
  return (
    <Container>
      <CardList>
        {cats.map((cat: Cat) => {
          return (
            <CardItem key={cat.name}>
              <div className="image-container">
                <Image src="https://thatcopy.pw/catapi/rest/" layout="fill" />
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

export default SSREmotion;