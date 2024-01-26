import Link from 'next/link'

export default function NotFound() {

  return (
    <div className='not-found'>
        <h1>404 - Page Not Found</h1>
        <Link href="/customers">
            Go back home
        </Link>
    </div>
    )
}