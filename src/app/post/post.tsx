import * as React from 'react'

export function Post(props) {
  return (
    <div className="post">
      <pre>{JSON.stringify(props.posts, null, 2)}</pre>
    </div>
  )
}
