import ThemeSwitcher from "./ThemeSwitcher";


export default function Header() {
  
  return (
    <header className="dark:bg-darkElements dark:text-white text-content tracking-wide">
        <div className="w-screen flex justify-between shadow-md mx-0 py-8 lg:py-6 px-5 lg:px-16">
            <h1 className="font-extrabold lg:text-lg">Where in the world?</h1>
            <ThemeSwitcher />
        </div>
    </header>
  )
}