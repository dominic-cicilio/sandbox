import CATS, { CatResponseData, getCatByName } from '../../../../data/cats';
import Image from 'next/image';
import { Cat } from '../../../../data/cats';
 import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProfileContainer, ProfileImage, ProfileImageContainer } from '../../../../components/StyledComponents';

interface CatProfileProps {
  cat: Cat;
}

const CatProfile = ( { cat }: CatProfileProps) => {

  return (
    <ProfileContainer>
      {cat?.url && (
        <ProfileImageContainer>
          <ProfileImage src={cat.url} layout="responsive" width="50%" height="50%" />
        </ProfileImageContainer>
      )}
      <h1>{cat.name}</h1>
      <h2>{cat.bio}</h2>
    </ProfileContainer>
  )
};

export default CatProfile

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATS.map((cat) => ({
    params: { name: cat.name }
  }))

  return { paths, fallback: 'blocking'}
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params as IParams;
  const catName: string | string[] = name ?? "";
  let cat: Cat = {
    name: "testCat",
    bio: "testBio"
  }

  if (typeof catName === "string") {
    cat = getCatByName(catName) ?? cat;
    const res = await fetch(`https://thatcopy.pw/catapi/rest/`);
    const catResponseData: CatResponseData = await res.json();
    const catUrl = catResponseData.url;
    cat.url = catUrl;
  }

  const props = { cat }
  return {
    props,
    revalidate: 10
  };
}