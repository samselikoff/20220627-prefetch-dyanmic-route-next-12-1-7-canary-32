import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Next.js 12.1.7-canary.37</p>
      <Link href="/posts/1">Post 1</Link>
    </div>
  );
}
