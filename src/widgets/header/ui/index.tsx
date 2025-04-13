import { Button } from "@shared/components"
import { BOARDS_PAGE_URL, ISSUES_PAGE_URL } from "@shared/config"
import cn from "classnames"
import { Link, useLocation } from "react-router-dom"

export const Header=()=>{
  const location=useLocation()
  
  return(
    <header className="flex items-center w-100 justify-between border-b border-gray-200 p-2">
      <nav className="flex items-center gap-6">
          <Link
            to={ISSUES_PAGE_URL}
            className={cn(
              "text-lg font-medium transition-opacity opacity-45 hover:opacity-95",{
                'opacity-95': location.pathname === ISSUES_PAGE_URL
              }
            )}
          >
            Все задачи
          </Link>
          <Link
            to={BOARDS_PAGE_URL}
            className={cn(
              "text-lg font-medium transition-opacity opacity-45 hover:opacity-95",{
                'opacity-95': location.pathname === BOARDS_PAGE_URL
              }
            )}
          >
            Проекты
          </Link>
      </nav>
      <Button onClick={() => {}}>Создать задачу</Button>
    </header>
  )
}