import { GiHamburgerMenu } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";


export default function Header(){
    return(
        <main className="flex bg-[#D9D9D9] justify-around h-20 items-center border border-black text-Inter-600">
            <GiHamburgerMenu className="w-8 h-5"/>
            <h1>Rede Restaurante</h1>
            <MdShoppingCart className="w-8 h-8"/>

        </main>
    )
}