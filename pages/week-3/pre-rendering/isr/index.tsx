import * as React from 'react';
import Image from 'next/image';
import CATS, { Cat } from '../../../../data/cats';
import { Container, CardList, CardItem, StyledLink } from '../../../../components/StyledComponents';
import Link from 'next/link';

export interface SSREmotionProps {
  cats: Cat[]
}

const SSREmotion: React.FC<SSREmotionProps> = ({cats}) => {

  return (
    <Container>
      <CardList>
        {cats.map((cat: Cat) => {
          return (
            <CardItem key={cat.name+cat.url}>
              <div className="image-container">
                { cat?.url && <Image src={cat.url} layout="fill" /> }
              </div>
              <div className="container__text">
                <h1>{cat.name}</h1>
                <p>{cat.bio}</p>
              </div>

              <Link href={`isr/${cat.name}`} passHref><StyledLink>Learn More</StyledLink></Link>
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
  });

  const catsWithUrls = CATS.map((cat: Cat, i: number) => {
    return {
      ...cat,
      url: catUrls[i],
      imageName: catImageNames[i]
    }
  });

  // Pass data to the page via props
  return {
    props: { cats: catsWithUrls },
    revalidate: 10
  }
}

export default SSREmotion;