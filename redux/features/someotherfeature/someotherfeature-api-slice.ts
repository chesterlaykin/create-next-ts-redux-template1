import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SOMEFEATURE_API_KEY = 'xxxxxxxxxxxxxxxxx';

interface SomeOtherFeatureCategory {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', SOMEFEATURE_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchSomeOtherFeatureCategory: builder.query<SomeOtherFeatureCategory[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchSomeOtherFeatureCategoryQuery } = apiSlice;
