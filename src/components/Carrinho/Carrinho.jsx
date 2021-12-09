import React from "react";
import  CarroVazio  from "../../shopping-cart-180px.svg";
import Remover from "../../delete.svg"
import {
  PaginaCarrinho,
  CardCompra,
  DescricaoProduto,
  IdentificaProduto,
  TextoProduto,
  BotaoDeletar,
  AreaQuantidade,
  ResumoCompra,
  ItensResumoCompra,
  CarrinhoVazio,
  BotaoLimpar,
} from "./StyledCarrinho";


export default class Carrinho extends React.Component {
  valorTotalProduto = (preco, quantidade) => {
    const total = (preco * quantidade).toFixed(2);
    return total;
  };
  
  valorTotalCarrinho = (listaNaves) => {
    let valorTotal = 0;
    for (let nave of listaNaves) {
      valorTotal += nave.value * nave.quantidade;
    }
    return valorTotal.toFixed(2);
  };
  mensagemCompra = () => {
    alert(`Compra realizada com sucesso! Parabéns pela nova aquisição.`);
    window.location.reload(false);
    this.props.limparCarrinho();
  };
  render() {
  const produtosNoCarrinho = this.props.carrinho.map((nave) => {
    return (
      <CardCompra key={nave.id}>
        <DescricaoProduto>
          <IdentificaProduto>
            <img src={nave.imageUrl} alt={nave.name} />
            <div>
              <p>
                <em>{nave.name}</em>
              </p>
              <TextoProduto>{nave.descricao}</TextoProduto>
            </div>
          </IdentificaProduto>
          <BotaoDeletar
            src={Remover}
            alt="Botão remover nave"
            onClick={() => this.props.removerProduto(nave.id)}
          />
        </DescricaoProduto>
        <hr />
        <DescricaoProduto>
          <AreaQuantidade>
            <h4>
              Quantidade:{" "}
              <button onClick={() => this.props.diminuirQuantidade(nave)}>
                {" "}
                -{" "}
              </button>{" "}
              <span>{nave.quantidade}</span>{" "}
              <button onClick={() => this.props.adicionarQuantidade(nave)}>
                {" "}
                +{" "}
              </button>
            </h4>
          </AreaQuantidade>
          <p>¢ {this.valorTotalProduto(nave.value, nave.quantidade)}</p>
        </DescricaoProduto>
      </CardCompra>
    );
  });

  const resumoCompra = (
    <div>
      <h2>SUA COMPRA</h2>
      <ResumoCompra>
        <ItensResumoCompra>
          <h2>Você escolheu:</h2>
          <p> {this.props.totalItens(this.props.carrinho)} item(s) </p>
        </ItensResumoCompra>
        <ItensResumoCompra>
          <h2>Subtotal:</h2>
          <p>R$ {this.valorTotalCarrinho(this.props.carrinho)}</p>
        </ItensResumoCompra>
        <ItensResumoCompra>
          <h2>Frete:</h2>
          <p>GRÁTIS</p>
        </ItensResumoCompra>
        <ItensResumoCompra>
          <h1>Total:</h1>
          <h1>R$ {this.valorTotalCarrinho(this.props.carrinho)}</h1>
        </ItensResumoCompra>
      
        <div>
          <button
            onClick={() => {
              this.mensagemCompra();
            }}
          >
            FINALIZAR COMPRA
          </button>
          <button onClick={this.props.paginaCarrinho}>
            QUERO MAIS PRODUTOS
          </button>
        </div>
      </ResumoCompra>
    </div>
  );

  const carrinhoVazio = (
    <div>
      <img src={CarroVazio} alt="Carrinho vazio" />
      <h2>Ops... Carrinho Vazio!</h2>
      <button onClick={this.props.paginaCarrinho}>
        VOLTAR PARA A PÁGINA INICIAL
      </button>
    </div>
  );

  if (this.props.carrinho.length > 0) {
    return (
      <div>
        <PaginaCarrinho>
          <div>
            <div>
              <h2>CARRINHO</h2>
            </div>
            {produtosNoCarrinho}
            <div>
              <BotaoLimpar
                onClick={() => {
                  this.props.limparCarrinho();
                }}
              >
                Limpar Carrinho
              </BotaoLimpar>
            </div>
          </div>
          <div>{resumoCompra}</div>
        </PaginaCarrinho>
      </div>
    );
  } else {
    return <CarrinhoVazio>{carrinhoVazio}</CarrinhoVazio>;
  }
}
}