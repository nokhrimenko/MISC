/* eslint-disable react/prop-types */
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { IProperty } from "../../types/commontTypes";

interface ISearchResult {
  property: IProperty;
}

// eslint-disable-next-line react/prop-types
const SearchCardResult: React.FC<ISearchResult> = ({ property }) => (
  <div>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box maxH="130px" overflow="hidden">
        <Image src={property.image.uri} />
      </Box>

      <Box p="6" bg="white">
        {property.categories.map(({ name }) => (
          <Box
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            color="#FF8615"
            fontSize="15px"
            key={name}
          >
            {name}
          </Box>
        ))}

        <Box fontWeight="bold" as="h3" lineHeight="tight" fontSize="18px">
          {property.name}
        </Box>

        {property.experts.map((expert) => (
          <>
            <Box fontWeight="bold" as="span" lineHeight="tight" fontSize="14px">
              {expert.firstName} {expert.lastName}
            </Box>

            <Box
              fontWeight="bold"
              as="span"
              lineHeight="tight"
              fontSize="14px"
              display="block"
            >
              {expert.title}
            </Box>

            <Box
              fontWeight="bold"
              as="span"
              lineHeight="tight"
              fontSize="14px"
              color="#FF8615"
            >
              {expert.company}
            </Box>
          </>
        ))}
      </Box>
    </Box>
  </div>
);

export default SearchCardResult;
