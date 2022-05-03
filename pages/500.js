import Link from 'next/link'

export default function FiveOhOh() {
  return <>
    <h1>500 - Internal Server Error</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}