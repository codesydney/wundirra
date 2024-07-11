import Image from 'next/image'
import NavButtons from './NavButtons'

export default function Header() {
  return (
    <header className="flex justify-between px-2 py-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="flex gap-4 items-end">
        <Image
          width={50}
          height={50}
          src="/assets/wundirralogobutterfly.png"
          alt="Windurra consulting's Logo"
        />
        <p className="text-2xl text-wun-primary">Wundirra</p>
      </div>
      <NavButtons />
    </header>
  )
}
