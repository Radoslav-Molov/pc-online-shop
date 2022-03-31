import React from "react";
import style from "../Invoice/Invoice.module.css";

function Invoice() {
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
                  <strong>Invoice #:</strong> 123
                  <br />
                  <strong>Created:</strong> January 1, 2015
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
                  ComputeYourself
                  <br />
                  Sofia
                  <br />
                  Barzarica street 14
                </td>

                <td>
                  Acme Corp.
                  <br />
                  John Doe
                  <br />
                  john@example.com
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
          <td>PC</td>

          <td>$2000.00</td>
        </tr>

        <tr className={style.total}>
          <td></td>

          <td>Total: $2000.00</td>
        </tr>
      </table>
    </div>
  );
}

export default Invoice;
