import { FC } from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const FooterSection: FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-[45px]">
      <div className="flex-1 flex items-center mb-[15px] md:mb-0 justify-center md:justify-start">
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
      <div className="flex gap-4 justify-center md:justify-start">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-wun-primary p-[15px] rounded-full hover:bg-white transition-colors duration-300"
        >
          <FaTwitter
            className="text-white group-hover:text-wun-primary transition-colors duration-300"
            size={16}
          />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-wun-primary p-[15px] rounded-full hover:bg-white transition-colors duration-300"
        >
          <FaFacebook
            className="text-white group-hover:text-wun-primary transition-colors duration-300"
            size={16}
          />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-wun-primary p-[15px] rounded-full hover:bg-white transition-colors duration-300"
        >
          <FaLinkedin
            className="text-white group-hover:text-wun-primary transition-colors duration-300"
            size={16}
          />
        </a>
      </div>
    </div>
  )
}

export default FooterSection
