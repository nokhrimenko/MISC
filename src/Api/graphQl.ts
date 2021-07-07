import { GraphQLClient } from "graphql-request";
import { addResizeParam } from "@helpers/utils";
import { IProperty } from "../types/commontTypes";

const graphQL = new GraphQLClient("https://api.staging.tigerhall.io/graphql");

// eslint-disable-next-line import/prefer-default-export
export const getAllCards = async () => {
  const {
    contentCards: { edges },
  } = await graphQL.request(`{
        contentCards(filter: {keywords: "", types: [PODCAST]}) {
          edges {
            ... on Podcast {
              name
              image {
                ...Image
              }
              categories {
                ...Category
              }
              experts {
                ...Expert
              }
            }
          }
        }
      }

      fragment Image on Image {
        uri
      }

      fragment Category on Category {
        name
      }

      fragment Expert on Expert {
        firstName
        lastName
        title
        company
      }

    `);

  const withImageResolutionEdges = edges.map((element: IProperty) => {
    element.image.uri = addResizeParam(element.image.uri);
    return element;
  }, []);

  return withImageResolutionEdges;
};
