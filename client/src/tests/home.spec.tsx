import {describe,expect,test} from "@jest/globals"
import {render, screen} from "@testing-library/react"
import Home from "@/app/page"

describe("testando se o número de produtos na tela é o mesmo da base de dados", () => {
    test("testando se o número de produtos na tela é o mesmo da base de dados",() => {
        render(<Home/>)
        const produtos = screen.getAllByTestId("produto")
        
        expect(produtos.length).toBe(30)
     })
})

describe("testando se o número de produtos na tela com o texto 'pa' é o mesmo da base de dados",() => {
   test("testando se o número de produtos na tela com o texto 'pa' é o mesmo da base de dados", () => {
      render(<Home/>)
      const produtos = screen.getAllByTestId("produto")
       
      expect(produtos.filter(item => item.text.toLowerCase().match('pa')).length).toBe(3)
   })
})