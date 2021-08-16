import styled from '@emotion/styled';
import Image from 'next/image';

export const Container = styled.div`
  overflow: "hidden";
  max-width: "100%";
  width: "450px";

  & div {
    background-color: pink
  }
`;

export const EpicContainer = styled(Container)`
  background-color: blue;
`;

export const CardList = styled.div`
  padding: 40px;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  place-items: center;
  grid-row-gap: 40px;
`;

export const StyledLink = styled.a`
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
  text-decoration: none;

  i {
    margin-left: 20px;
    font-size: 1.5rem;
  }
`

export const CardItem = styled.div`
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

export const ProfileContainer = styled.div`
  width: 100%;
`;

export const ProfileImage = styled(Image)`
  border-radius: 100%;
  /* box-shadow: 1px 1px 10px 10px black; */
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  overflow: visible;
  width: 40vh;
  height: 40vh;
  left: -10vh;
  top: -10vh;
`;