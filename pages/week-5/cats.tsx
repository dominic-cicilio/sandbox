import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { HttpLink } from '@apollo/client';

interface Cat {
  id: string,
  catName: string,
  bio: string,
  image: {
    url: string
  },
  documentInStages: {
    stage?: string
  }
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
  console.log(cats[0].image);
  return (
    <Container>
      <CardList>
        {cats.map((cat: Cat) => {
          return (
            <CardItem key={cat.id}>
              <div className="image-container">
                <Image src={cat?.image?.url} layout="fill" />
              </div>
              <div className="container__text">
                <h1>{cat.catName}</h1>
                <p>{cat.bio}</p>
              </div>

              <button className="btn">More Info</button>
            </CardItem>
          )
        })}
      </CardList>
    </Container>
   );
}

// export async function getStaticPaths(context: GetStaticPathsContext) {
//   context.
// }

export async function getStaticProps(context: GetStaticPropsContext) {
  // Fetch data from external API

  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPH_CMS,
      headers: {
        authentication: `Bearer ${process.env.AUTH_TOKEN}`,
      },
      fetch
    }),
    cache: new InMemoryCache()
  });

  console.log("c", client);


  const { data }: {
    data: any
  } = await client.query({
    query: gql`
      query {
        cats {
          catName,
          bio,
          id,
          image {
            url
          }
          documentInStages {
            stage
          }
        }
      }
    `
  });

  const filteredCats = data.cats.map((cat: Cat) => {
    const useDrafts = context.preview;

    if (useDrafts && cat.documentInStages?.stage !== "PUBLISHED") {
      return cat;
    } else {
      return cat
    }
  })


  // Pass data to the page via props
  return { props: { cats: filteredCats } }
}

export default SSREmotion;