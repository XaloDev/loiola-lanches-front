import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getOrdersRequest } from "../../redux/orders/actions";
import { AppEnvelope } from "../AppEnvelope";
import Order from "../Order";
import { DashboardScreenWrapper } from "./styles";

export default function DashboardScreenComponent(props){

  const dispath = useAppDispatch()
  const { orders } = useAppSelector(store => store.orders)

  useEffect(() => {
    dispath(getOrdersRequest())
  }, [])

  console.log(orders)

  return(
    <AppEnvelope>
      <DashboardScreenWrapper>
        {orders?.length > 0 && orders.map(order => {
          return <Order order={order} key={order.id}/>
        })}
      </DashboardScreenWrapper>
    </AppEnvelope>
  )
}
