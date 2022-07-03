import { OrderItemWrapper } from "./styles";

export default function OrderItem({orderItem}){
  return (
    <OrderItemWrapper>
      <span>Produto: {orderItem.product.name}</span>
      <span>Quantidade: {orderItem.quantity}</span>
      <span>Preço: R$ {Number(orderItem.price).toFixed(2)}</span>
      <span>Subtotal: R$ {Number(orderItem.subTotal).toFixed(2)}</span>
    </OrderItemWrapper>
  )
}
