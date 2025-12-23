import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed bg-white border-b inset-x-0">
      <div className="con px-3 h-20 flex">
        <nav>
          <ul className="flex gap-2 h-full items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/post">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
