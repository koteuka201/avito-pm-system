import { generateLinkWithId } from "@shared/lib"

export const APP_START_URL=''

export const BOARD_START_URL=`${APP_START_URL}/board`
export const BOARDS_PAGE_URL=`${APP_START_URL}/boards`
export const ISSUES_PAGE_URL=`${APP_START_URL}/issues`

export const GENERATE_BOARD_PAGE_URL=(id: string)=>{
  return generateLinkWithId(BOARDS_PAGE_URL, BOARD_START_URL, null, id)
} 