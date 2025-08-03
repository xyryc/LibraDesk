
import type { AppDispatch } from "@/store"
import { useDispatch } from "react-redux"




export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>();