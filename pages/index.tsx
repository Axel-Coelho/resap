import Link from 'next/link'

export default function Home() {
  return (
    <Link href="/fiches">
      <a
        className="inline-flex items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Fiches
      </a>
    </Link>
  )
}
