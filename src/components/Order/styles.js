import styled from "styled-components";

export const OrderWrapper = styled.div`

  width: 50%;

  height: 100%;
  min-width: 100px;
  background-color: orange;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.75);
  gap: 5px;


  .gridCampos {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    .colunaUm {
      grid-column-start: 0;
      grid-column-end: 0;
      grid-row-start: 0;
      grid-row-end: 1;
      display: flex;
      flex-direction: column;
    }

    .colunaDois {
      grid-column-start: 0;
      grid-column-end: 0;
      grid-row-start: 0;
      grid-row-end: 1;
      display: flex;
      flex-direction: column;
    }
  }

  .status {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 5px;
  }

  .total {
    width: 100%;
    direction: rtl;
  }
  .statusBall {

    min-height: 20px;
    padding: 10px;
    border-radius: 20px;
    background-color: ${props => {
      switch (props.status) {
        case 'PAID':
          return 'green'
        case 'WAITING_PAYMENT':
          return 'blue'
        default:
          return 'red'
      }
    }};

    color: ${props => {
      switch (props.status) {
        case 'PAID':
          return 'white'
        case 'WAITING_PAYMENT':
          return 'white'
        default:
          return 'white'
      }
    }};


  }




`
