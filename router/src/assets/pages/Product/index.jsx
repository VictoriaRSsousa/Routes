import Header from "../../components/Header";

export default function Product(){
    return(
        <>
        <Header/>
        <h1 className="p-8 text-Inter-600">Pratos Principais</h1>
        <img src="https://th.bing.com/th/id/OIP.NgNy_absMW1iFS-Kirbz_QHaE5?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" className="border border-black w-full" />
        <section className="p-5">
            <p> Prato Muito BOM</p>
            <p> Prato p/ 2 pessoas</p>
        </section>
        <p className="text-justify px-7"> O Frango à Parmegiana é um prato clássico da culinária italiana que se popularizou no Brasil. 
            É composto por filés de frango empanados, cobertos com molho de tomate e queijo derretido. 
            É uma opção deliciosa e versátil que pode ser servida como prato principal em almoços e jantares.
        </p>
            {/* FALTA DESCER OS BOTOES */}
        <footer className="flex justify-around">
            <div className="flex gap-1 bg-[#D9D9D9] border border-black w-[144px]"> 
                <button> - </button>
                <p>Adicione</p>
                <button> + </button>
            </div>
            <p> Preço : R$ 40,00 </p>

        </footer>
        </>
    )
}