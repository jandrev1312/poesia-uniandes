import { useEffect, useState } from "react"
import { Icon } from "@iconify-icon/react"
import useMediaQuery from "@/hooks/useMediaQuery"

const Navbar = () => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    if (isDesktop) {
      setOpenedMenu(false)
    }
  }, [isDesktop])

  return (
    <nav className="bg-secondary drop-shadow">
      <div className="py-2 px-4 flex justify-between items-center grow-container md:max-w-2xl">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-end w-fit">
            <h2 className="font-semibold text-3xl lg:text-4xl">Poesía</h2>
            <div className="text-xs lg:text-sm">Uniandes</div>
          </div>
          {isDesktop && (
            <strong className="font-serif font-medium text-lg">
              Algo más que poesía
            </strong>
          )}
        </div>
        {/* Desktop buttons */}
        {isDesktop && (
          <div className="space-x-6">
            <a className="text-sm">Contacto</a>
            <button className="px-4 py-2 text-white text-md rounded-md bg-extra2 font-bold">
              Únete
            </button>
          </div>
        )}
        {/* Mobile nav menu button */}
        {!isDesktop && (
          <div
            onClick={() => setOpenedMenu(() => !openedMenu)}
            className="text-3xl leading-3"
          >
            {!openedMenu ? (
              <Icon icon="ant-design:menu-outlined" />
            ) : (
              <Icon icon="ant-design:menu-unfold-outlined" />
            )}
          </div>
        )}
      </div>
      {/* Mobile menu */}
      {openedMenu && (
        <div className="px-4 flex flex-col py-10 space-y-10 items-center text-xl">
          <a>Contacto</a>
          <button className="font-bold rounded-md text-white py-3 bg-extra2 w-full">
            Únete
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
