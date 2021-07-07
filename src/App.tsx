import React, { useEffect } from "react";
import "./styles/index.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import SearchPage from "@containers//SearchPage/SearchPage";
import { getInitialState } from "./redux/cardsSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChakraProvider>
      <SearchPage />
    </ChakraProvider>
  );
};

export default App;
