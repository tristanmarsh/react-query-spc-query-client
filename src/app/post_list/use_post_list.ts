import { useContext } from 'react'
import { ApiClientContext } from '../../index'
import { useQuery, useQueryClient } from 'react-query'

export function usePostList() {
  const apiClient = useContext(ApiClientContext)
  const queryClient = useQueryClient()
  if (!apiClient) {
    throw new Error('usePostList must be called within ApiClientContext')
  }
  console.log(queryClient)

  queryClient.setQueryDefaults('posts', {
    staleTime: 1000 * 5,
  })

  const query = useQuery('posts', apiClient.findPostsMetadata)

  return query
}
