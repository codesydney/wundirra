import { FC } from 'react'

const FooterSection: FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-[45px]">
      <div className="flex-1 flex items-center mb-[15px] md:mb-0 justify-center">
        <span className="text-white font-bold">Crafted by </span>
        <a
          href="https://www.code.sydney/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-wun-primary font-bold ml-[5px]"
        >
          Code.Sydney
        </a>
      </div>
    </div>
  )
}

export default FooterSection
