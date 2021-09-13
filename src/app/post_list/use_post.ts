import { useContext } from 'react'
import { ApiClientContext } from '../../index'
import { useQuery, useQueryClient } from 'react-query'

export function usePost(postId: string) {
  const apiClient = useContext(ApiClientContext)
  const queryClient = useQueryClient()
  if (!apiClient) {
    throw new Error('usePost must be called within ApiClientContext')
  }

  queryClient.setQueryDefaults('post', {
    staleTime: 0,
  })

  const query = useQuery(['post', postId], () =>
    apiClient.getPostContent({
      postId,
    })
  )

  return query
}
