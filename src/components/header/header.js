import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getPosts } from 'redux/post/selectors';

export default function Header() {
  const { items, isLoading, error } = useSelector(getPosts);

  // console.log(getPosts);

  if (isLoading) {
    return <div>Spinner...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (items !== []) {
    return (
      <ul>
        i`m Headder
        {items.map(post => {
          return (
            <li key={post.id}>
              {post.title}
              <div>{post.body}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}
