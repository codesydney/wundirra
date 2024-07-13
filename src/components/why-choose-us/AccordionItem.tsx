import { FC } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { AccordionItem as AccordionItemType } from './accordionData'

interface AccordionItemProps {
  item: AccordionItemType
  isOpen: boolean
  toggleAccordion: () => void
}

const AccordionItem: FC<AccordionItemProps> = ({
  item,
  isOpen,
  toggleAccordion,
}) => {
  const Icon = item.icon

  return (
    <div className="border border-custom-light/20 rounded-md mb-2">
      <button
        className="flex justify-between items-center w-full text-left p-4"
        onClick={toggleAccordion}
      >
        <span className="font-medium flex items-center">
          <Icon className="w-5 h-5 mr-3 text-wun-primary" />
          {item.title}
        </span>
        <FaChevronDown
          className={`text-wun-primary min-w-5 min-h-5 w-5 h-5 transition-all duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div
          className={`px-4 text-white grid transition-grid-rows duration-200 ${isOpen ? 'grid-rows-single-row' : 'grid-rows-0'}`}
        >
          <div className={`overflow-hidden ${isOpen ? 'pb-4' : ''}`}>
            {item.content}
          </div>
        </div>
      )}
    </div>
  )
}

export default AccordionItem
