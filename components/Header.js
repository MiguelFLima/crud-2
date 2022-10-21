import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {

  const router = useRouter();

  return (
    <div className="w-[100vw] h-[80px] bg-white flex items-center justify-around shadow-lg rounded-lg">

      {/* Image */}
      <div onClick={() => router.push('/')}className="relative w-[72px] h-[80px] flex items-center cursor-pointer">
        <Image
          src="/doguitoadm.svg"
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Nav */}
      <nav className="flex space-x-8 text-xl">
        <Link href="/dashboard">
          <a className='navBtn'>Dashboard</a>
        </Link>
        <Link href="/produtos">
          <a className='navBtn'>Produtos</a>
        </Link>
        <Link href="/clientes">
          <a className='navBtn'>Clientes</a>
        </Link>
        <Link href="/pets">
          <a className='navBtn'>Pets</a>
        </Link>
      </nav>

    </div>
  );
}

export default Header;
