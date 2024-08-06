const statements = ['Wisdom', 'Connection', 'Self-Determination', 'Empowerment']

export default function HeroSlider() {
  return (
    <div
      className="bg-wun-primary py-8 overflow-x-hidden whitespace-nowrap relative before:absolute before:content-[' '] before:top-0 before:left-0 before:h-full before:w-8 before:bg-gradient-to-r before:from-custom-dark/100 before:to-custom-dark/0 before:z-10
      after:absolute after:content-[' '] after:top-0 after:right-0 after:h-full after:w-8 after:z-10 after:bg-gradient-to-l after:from-custom-dark/100 after:to-custom-dark/0 max-w-[1440px] mx-auto"
    >
      <ul className="whitespace-nowrap w-max animate-carouselSlide inline-block list-disc list-inside">
        {statements &&
          statements.map((statement, index) => {
            return (
              <li
                key={index}
                className="text-custom-dark font-bold list-disc inline-block mr-8 lg:mr-14 xl:text-xl"
              >
                <div className="flex gap-2 items-center">
                  <span className="w-2 h-2  xl:w-4 xl:h-4 rounded-full bg-custom-dark"></span>
                  {statements[index]}
                </div>
              </li>
            )
          })}
      </ul>
      <ul className="whitespace-nowrap w-max animate-carouselSlide inline-block list-disc list-inside">
        {statements &&
          statements.map((statement, index) => {
            return (
              <li
                key={index}
                className="text-custom-dark font-bold list-disc inline-block mr-8 lg:mr-14 xl:text-xl"
              >
                <div className="flex gap-2 items-center">
                  <span className="w-2 h-2  xl:w-4 xl:h-4 rounded-full bg-custom-dark"></span>
                  {statements[index]}
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
