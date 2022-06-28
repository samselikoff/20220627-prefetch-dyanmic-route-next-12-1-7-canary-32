export default function PostDetail() {
  return <p>I am the post</p>;
}

export function getStaticProps() {
  return {
    props: {
      foo: 1,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
