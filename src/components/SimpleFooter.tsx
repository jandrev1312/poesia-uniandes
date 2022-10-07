import { Icon } from "@iconify-icon/react"

const SimpleFooter = () => {
  return (
    <footer className="border-t border-white/30 text-center text-white bg-extra2">
      {/* Wrapper */}
      <div className="space-y-7 py-12 max-w-2xl mx-auto md:flex md:flex-row-reverse md:space-y-0 md:items-center md:justify-between grow-container">
        <div className="flex space-x-7 justify-center text-2xl items-center">
          <Icon
            icon="akar-icons:instagram-fill"
            className="hover:text-instagram"
          />
          <Icon
            icon="akar-icons:facebook-fill"
            className="hover:text-facebook"
          />
        </div>
        <div className="text-xs">© 2022 Poesía Uniandes</div>
      </div>
    </footer>
  )
}
export default SimpleFooter
