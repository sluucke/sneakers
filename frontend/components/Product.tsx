import Image from 'next/image'
import shoppingBadgeIcon from '../assets/icons/shopping-bag.svg'
type ProductProps = {
  name: string
  price: string
  image: string
  promotion?: boolean
  oldPrice?: string
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Product({
  name,
  price,
  image,
  promotion,
  oldPrice,
}: ProductProps) {
  return (
    <div className="max-h-72 max-w-none sm:max-w-[250px] relative p-2 rounded h-72 w-full flex justify-between flex-col shadow-lg bg-white ">
      <img
        className="absolute z-0 left-[20%] sm:left-0 max-w-[200px] sm:max-w-[235px]"
        draggable={false}
        src={image}
      />
      <div className="flex justify-between items-start z-10">
        <p className="font-light text-xl">{name}</p>
        <div className="flex-col">
          {promotion && (
            <p
              className={classNames(
                promotion ? 'line-through' : '',
                'font-normal text-xl pl-2'
              )}
            >
              R${oldPrice}
            </p>
          )}
          <p className={'font-bold text-xl pl-2'}>R${price}</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="group">
          <div className="cursor-pointer rounded-full p-2 relative flex items-center justify-center transition-colors duration-300 group-hover:bg-black">
            <Image
              className="group-hover:invert"
              draggable={false}
              width={30}
              height={30}
              src={shoppingBadgeIcon}
              alt="Vetor Gráfico"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
