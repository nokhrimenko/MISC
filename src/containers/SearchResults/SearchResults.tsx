/* eslint-disable react/prop-types */
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { cards } from "@redux/cardsSlice";
import SearchCardResult from "../../components/SearchCardResult/SearchCardResult";
import { useAppSelector } from "../../app/hooks";

const SearchResults: React.FC = () => {
  const allCards = useAppSelector(cards);

  return (
    <article>
      <SimpleGrid columns={1} spacing={5}>
        {allCards.map((result, index) => (
          <SearchCardResult property={result} key={String(index)} />
        ))}
      </SimpleGrid>
    </article>
  );
};

export default SearchResults;
