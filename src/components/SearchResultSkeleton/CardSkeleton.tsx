import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";

const CardSkeleton: React.FC = () => (
  <div>
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box maxH="130px" overflow="hidden">
        <Skeleton height="130px" />
      </Box>

      <Box p="3" style={{ background: "white" }}>
        <Box mt="1">
          <Skeleton height="15px" />
        </Box>

        <Box mt="1">
          <Skeleton height="15px" />
        </Box>

        <Box mt="1">
          <Skeleton height="15px" />
        </Box>

        <Box mt="1">
          <Skeleton height="15px" />
        </Box>

        <Box mt="1">
          <Skeleton height="15px" />
        </Box>
      </Box>
    </Box>
  </div>
);

export default CardSkeleton;
