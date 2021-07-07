import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CardSkeleton from "./CardSkeleton";

const CardsSkeletonContainer: React.FC = () => (
  <SimpleGrid columns={1} spacing={5}>
    {Array(3)
      .fill(1)
      .map((_, index) => (
        <CardSkeleton key={String(index)} />
      ))}
  </SimpleGrid>
);

export default CardsSkeletonContainer;
