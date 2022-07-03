import OrderItem from "../OrderItem";
import { OrderWrapper } from "./styles";
import moment from 'moment'
import { Table } from "antd";

export default function Order({order}){


  const data = new Date(order.moment)
  const momento = moment(data).format('HH:mm - DD/MM/yyyy')
  const frete = {
    product: {
      name: "Taxa de entrega"
    },
    price: 1,
    subTotal: 1
  }


  function getStatusEmPortugues(){
    switch (order.orderStatus){
      case 'PAID':
        return 'Pago'
      case 'WAITING_PAYMENT':
        return 'Aguardando pagamento'
      default:
        return 'Status não reconhecido'
    }
  }

  function getMetodoDePagamento(){
    switch (order.paymentMethod){
      case 'PIX':
        return 'Pix'
      case 'DINHEIRO':
        return 'Dinheiro'
      case 'CARTAO_PRESENCIAL':
        return 'Cartão'
      default:
        return 'Método de pagamento não reconhecido'
    }
  }

  const columns = [
    {
      title: 'Produto',
      dataIndex: ['product', 'name'],
      key: ['product', 'name'],
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Subtotal',
      dataIndex: 'subTotal',
      key: 'subTotal',
    },
  ];

  return (
    <OrderWrapper status={order.orderStatus}>
      <div className="gridCampos">
        <div className="colunaUm">
          <span><b>Cliente: </b>{order.client.name}</span>
          <span><b>Hora: </b>{`${momento}`}</span>
          <span><b>Endereço: </b>{`${order.street} ${order.number}`}</span>
          <span><b>Método de pagamento: </b>{getMetodoDePagamento()}</span>
        </div>
        <div className="colunaDois">
          <span><b>Telefone: </b>{order.client.phone}</span>
          <span><b>Bairro: </b>{order.neighbourhood}</span>
          <span className="status"><b>Status: </b><div className="statusBall">{getStatusEmPortugues()}</div></span>
        </div>
      </div>
      <Table columns={columns} dataSource={[...order.items, frete]} pagination={false}></Table>
      <span className="total"><b>Valor total: </b>R${Number(order.total + 1).toFixed(2)}</span>
    </OrderWrapper>
  )
}
