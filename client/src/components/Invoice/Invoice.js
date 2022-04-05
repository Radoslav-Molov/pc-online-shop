import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../Invoice/Invoice.module.css";

function Invoice() {
  const [invoiceId, setInvoiceId] = useState(
    window.location.pathname.split("/")[2]
  );
  const [invoice, setInvoice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/orders/${invoiceId}`)
      .then((res) => setInvoice(res.data));
  }, []);

  console.log(invoice);

  return (
    <div className={style.invoice_box}>
      <table cellPadding="0" cellSpacing="0">
        <tr className={style.top}>
          <td colSpan="2">
            <table>
              <tr>
                <td className={style.title}>
                  <img id={style.image} src="/second.png" alt="invoice" />
                </td>

                <td id={style.invoice_info}>
                  <strong>Invoice #:</strong> {invoice.number}
                  <br />
                  <strong>Created:</strong> {invoice.date}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className={style.information}>
          <td colSpan="2">
            <table>
              <tr>
                <td>
                  Dealer Info:
                  <br />
                  ComputeYourself
                  <br />
                  Sofia
                  <br />
                  Barzarica street 14
                </td>

                <td>
                  Client Info:
                  <br />
                  {invoice.name}
                  <br />
                  {invoice.surname}
                  <br />
                  {invoice.city}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className={style.heading}>
          <td>Items</td>

          <td>Price</td>
        </tr>

        <tr className={style.item}>
          <td>Computer</td>

          <td>${invoice.total}</td>
        </tr>

        <tr className={style.total}>
          <td></td>

          <td>Total: ${invoice.total}</td>
        </tr>
      </table>
    </div>
  );
}

export default Invoice;
