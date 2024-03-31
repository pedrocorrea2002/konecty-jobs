import Image from "next/image";

type Props = {
    nome: String;
    imagem: String;
    preco: Number;
}

export const Product = (Props) => {
    return (
      <div className="m-5 p-5 w-40 h-52 bg-white grid justify-center justify-items-center">
        <Image
          src={Props.imagem}
          alt={Props.nome}
          width={120}
          height={120}
          priority
        />
        <p style={{width:120}} className="text-start text-black font-bold">{Props.nome}</p>
        <p style={{width:120}} className="text-start text-black font-bold text-sm">{Props.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
    )
}