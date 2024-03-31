import Image from "next/image";

type Props = {
    nome: string;
    imagem: string;
    preco: Number;
    descricao: string;
}

export const Product = (Props: Props) => {
    return (
      <div className="m-5 w-40 h-56 rounded-lg bg-white flex flex-col justify-center items-center">
        <Image
          src={Props.imagem}
          alt={Props.nome}
          width={120}
          height={120}
          priority
        />
        <p style={{width:120}} className="text-start text-black font-bold">{Props.nome}</p>
        <p style={{width:120, fontSize:10}} className="text-start text-gray-500 h-8">{Props.descricao.length > 40 ? `${Props.descricao.substring(0,40)}...` : Props.descricao}</p>
        <p style={{width:120}} className="text-start text-black font-bold text-sm">{Props.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
    )
}