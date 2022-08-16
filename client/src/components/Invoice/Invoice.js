import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../util/http-request-url";
import style from "../Invoice/Invoice.module.css";

function Invoice() {
  const [invoiceId] = useState(window.location.pathname.split("/")[2]);
  const [invoice, setInvoice] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}/orders/${invoiceId}`)
      .then((res) => setInvoice(res.data));
  }, [invoiceId]);

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
                  <strong>Invoice #:</strong> {invoice.order}
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
                  {invoice.name} {invoice.surname}
                  <br />
                  {invoice.number}
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
