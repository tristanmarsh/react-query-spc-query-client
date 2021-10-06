# react-query-spc-query-client
Created with CodeSandbox


## Libraries
- TS
- React
- MobX
- MobX React
- Create React App
- React Query


## Notes

React Queries queryClient is exposed and passed in via react context in the QueryClientProvider only for simplicity in this demo. Is 

Similarly the apiClient is exposed and passed in via react context in ApiClientProvider. This however allows for an apiClient to be loaded dynamically at runtime based on something like a bootstrap value.

### Integrating apiClient with existing presenter and store

app_presenter.ts uses queryClient to fetch 'posts', and provides the apiClient.findPostsMetadata method as the fetching function. This allows for the caches value to be queried and copied into a store as per the SPC pattern.

### Optional New hook based observing for remote data sources

This `use_post_list.ts` and `use_post.ts` hooks provide a new alternative to accessing remote data with all the benefits react query provides.

- Automatic window focus, network status refetching.
- Cache dehydration/rehydration.
- Automatic de-duplication of requests.
- Automatic de-deduplication of fresh cache data.
- Observing requests for cache garbage collection.
- [All the goodies](https://react-query.tanstack.com/comparison)

### Additional React Query Notes

- Using the react query dev tools to understand the cache behaviour (Just rendering a react component).
- Configuring requests to have varying staleTime config via pattern matching of 'posts'.
- Placeholder display before initial loading based on existing cache entries. i.e. display the metadata of a post before the post has loaded because we already have partial values from the postMetadata:list request.
