import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import SearchInput from "@components//SearchInput/SearchInput";
import SearchResults from "@containers/SearchResults/SearchResults";
import CardsSkeletonContainer from "@components/SearchResultSkeleton/CardsSkeletonContainer";
import { loading } from "@redux/cardsSlice";
import styles from "./SearchPage.module.scss";
import { useAppSelector } from "../../app/hooks";

const SearchPage: React.FC = () => {
  const loadingState = useAppSelector(loading);

  return (
    <SimpleGrid columns={1} spacing={5} className={styles.searchPage}>
      <SearchInput />
      {loadingState ? <CardsSkeletonContainer /> : <SearchResults />}
    </SimpleGrid>
  );
};

export default SearchPage;
