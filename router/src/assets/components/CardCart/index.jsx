import { TbTrashXFilled } from "react-icons/tb";

export default function CardCart(){
    return(
        <article className="flex h-20 bg-[#D9D9D9] border border-black items-center justify-around">
            <button><TbTrashXFilled/></button>
            
            <p>Item 1</p>
            <p>R$ 20,00</p>
        </article>

    )
} 