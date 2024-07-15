import { FC } from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const FooterSection: FC = () => {
  return (
    <div className="flex p-[45px]">
      <div className="flex-1 flex items-center">
        Crafted by{' '}
        <a
          href="https://www.code.sydney/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-wun-primary font-bold ml-[5px]"
        >
          Code.Sydney
        </a>
      </div>
      <div className="flex gap-4">
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
