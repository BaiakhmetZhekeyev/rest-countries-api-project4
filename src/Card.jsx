import styled from "styled-components";
import React from "react";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-style: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
`;
const Card = ({ img, name, population, region, capital, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          <CardListItem>
            <b>Population: </b> {population}
          </CardListItem>
          <CardListItem>
            <b>Region: </b> {region}
          </CardListItem>
          <CardListItem>
            <b>Capital: </b> {capital}
          </CardListItem>
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
