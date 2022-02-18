/* eslint-disable */
import type * as Types from '../../graphql/generated/types';

import { gql } from '@apollo/client';
import { ProductFragmentDoc } from '../../components/Product/Product.generated';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ProductsListQueryVariables = Types.Exact<{
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type ProductsListQuery = { __typename: 'Query', productsPagination: { __typename: 'ProductsPagination', totalCount: number, nodes: Array<{ __typename: 'Product', id: string, likes: number, name: string, priceValue: number, pictures: Array<{ __typename: 'Picture', id: string, url: string }> }> } };


export const ProductsListDocument = /*#__PURE__*/ gql`
    query productsList($take: Int, $skip: Int) {
  productsPagination(take: $take, skip: $skip) {
    totalCount
    nodes {
      id
      ...product
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsListQuery__
 *
 * To run a query within a React component, call `useProductsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsListQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useProductsListQuery(baseOptions?: Apollo.QueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, options);
      }
export function useProductsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsListQuery, ProductsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsListQuery, ProductsListQueryVariables>(ProductsListDocument, options);
        }
export type ProductsListQueryHookResult = ReturnType<typeof useProductsListQuery>;
export type ProductsListLazyQueryHookResult = ReturnType<typeof useProductsListLazyQuery>;
export type ProductsListQueryResult = Apollo.QueryResult<ProductsListQuery, ProductsListQueryVariables>;