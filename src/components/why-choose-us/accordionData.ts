import { IconType } from 'react-icons'
import { LuShieldCheck } from 'react-icons/lu'

export interface AccordionItem {
  title: string
  content: string
  icon: IconType
}

export const accordionData: AccordionItem[] = [
  {
    title: 'Our collective and extensive Indigenous knowledge and expertise',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
  {
    title: 'Our range of specialist and professional skills',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
  {
    title: 'Culturally informed and Values/Outcomes driven',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
  {
    title: 'Trauma aware & informed',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
  {
    title: 'For Purpose leadership with a strong commitment to social justice',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
  {
    title:
      'Amplify & embed the voices & perspectives of women with lived expertise',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
  {
    title: 'Build economic independence/security for First Nations women',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
  {
    title: 'Uphold the principles of self-determination',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: LuShieldCheck,
  },
]
