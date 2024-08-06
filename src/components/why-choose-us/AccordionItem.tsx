import { FC } from 'react'
import { AccordionItem as AccordionItemType } from './accordionData'

interface AccordionItemProps {
  item: AccordionItemType
}

const AccordionItem: FC<AccordionItemProps> = ({ item }) => {
  const Icon = item.icon

  return (
    <div className="border border-custom-light/20 rounded-md mb-2">
      <div className="flex justify-between items-center w-full text-left p-4">
        <span className="font-medium flex items-center">
          <Icon className="w-5 h-5 mr-3 min-h-5 min-w-5 text-wun-primary" />
          {item.title}
        </span>
      </div>
      <div
        className={
          'px-4 text-white grid transition-accordion-item duration-200 grid-rows-0'
        }
      >
        <div className={'overflow-hidden'}>{item.content}</div>
      </div>
    </div>
  )
}

export default AccordionItem
