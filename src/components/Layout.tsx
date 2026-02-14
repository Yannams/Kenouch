// import { Volume2 } from "lucide-react"
import type { ReactNode } from "react"

const Layout = ({children}:{children:ReactNode}) => {
    return(
        <div className="bg-pink-100 p-5">
            {/* <div className="flex justify-end text-red-900">
                <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center-safe">
                    <Volume2/>
                </div>
            </div> */}
            <div >
                {children}
            </div>
        </div>
       
    )
}   

export default Layout