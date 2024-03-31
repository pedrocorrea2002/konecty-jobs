"use client"

import {Product} from "@/components/product"
import { useState, useEffect } from "react"
import axios from 'axios'

type products = {
  categoria: String,
  nome: String,
  preco: Number,
  imagem: String,
  descricao: String
}

export default function Home() {
  // UseStates
  const [data, setData] = useState<products[]>([])
  const [fullData, setFullData] = useState<products[]>([])

  // Alimentando lista de produtos
  useEffect(() => {
      axios.get("http://localhost:5000/products")
        .then((response) => {
            setData(response.data)
            setFullData(response.data)
        })
  },[])

  //Fazendo o filtro dos produtos conforme a escolha do usuário
  function filtraProduto(modalidade,e){

    //! Se esta função estiver sendo executada pela caixa de pesquisa, garantir que o filtro só será realizado quando a tecla apertada for "Enter"
    if(modalidade == "categoria" || e.key == "Enter"){
      let category:any = document.getElementById("category")
      let search:any = document.getElementById("search")
  
      if(category.value == "" && search.value == ""){
        setData(fullData)
      }
  
      if(category.value != "" && search.value == ""){
        setData(fullData.filter(a => a.categoria == category.value))
      }
  
      if(search.value != ""  && category.value == ""){
        setData(fullData.filter(a => a.nome.toLowerCase().match(search.value.toLowerCase())))
      }
  
      if(search.value != ""  && category.value != ""){
        setData(fullData.filter(a => a.nome.toLowerCase().match(search.value.toLowerCase()) && a.categoria == category.value))
      }
    }
  }

  return (
      <div>
        <div className="w-auto h-20 bg-blue-500">
          <p className="text-4xl w-auto text-center text-black">Mercado dias</p>
          <div className="flex flex-row w-auto">
            <p className="mx-4">Categoria</p>
            <select id="category" data-testid="category" className="rounded-lg" onChange={(e) => filtraProduto("categoria",null)}>
              <option className="text-black"></option>
              <option className="text-black">Grãos</option>
              <option className="text-black">Laticínios</option>
              <option className="text-black">Proteínas</option>
              <option className="text-black">Café da manhã</option>
              <option className="text-black">Óleos</option>
              <option className="text-black">Frutas</option>
              <option className="text-black">Legumes e verduras</option>
              <option className="text-black">Bebidas</option>
              <option className="text-black">Higiene</option>
              <option className="text-black">Iluminação</option>
            </select>

            <p className="ml-10 mr-4">Pesquisar</p>

            <input type="text" id="search" data-testid="search" className="rounded-lg w-96 text-black" onKeyDown={(e) => filtraProduto("nome",e)}/>
          </div>
        </div>
        <div className="flex flex-row flex-wrap bg-slate-300 tela_pai">
          {
            data.map((item) => {
              return(
                <Product
                  data-testid="produto"
                  nome={item.nome}
                  imagem={item.imagem}
                  preco={item.preco}
                  descricao={item.descricao}
                />
              )
            })
          }
        </div>
      </div>
  );
}
