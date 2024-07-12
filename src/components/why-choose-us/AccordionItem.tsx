import { FC } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
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
    <div className="border border-gray-200 rounded-md mb-2">
      <button
        className="flex justify-between items-center w-full text-left p-4"
        onClick={toggleAccordion}
      >
        <span className="font-medium flex items-center">
          <Icon className="w-5 h-5 mr-3 text-wun-primary" />
          {item.title}
        </span>
        {isOpen ? (
          <FaChevronUp className="text-wun-primary" />
        ) : (
          <FaChevronDown className="text-wun-primary" />
        )}
      </button>
      {isOpen && <div className="px-4 pb-4 text-white">{item.content}</div>}
    </div>
  )
}

export default AccordionItem
