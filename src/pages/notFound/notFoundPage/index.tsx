import { BOARDS_PAGE_URL } from "@shared/config"
import { Link } from "react-router-dom"

export const NotFoundPage=()=>{
  return(
    <div className="flex flex-col justify-center items-center mt-[60px] text-gray-800 dark:text-gray-200">
      <h1 className="text-9xl font-bold text-gray-500 dark:text-gray-600 animate-pulse">404</h1>
      <p className="text-xl mt-4">Страница не найдена</p>
      <Link to={BOARDS_PAGE_URL} className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition">
        Вернуться на главную
      </Link>
    </div>
  )
}