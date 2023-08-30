import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <td>Monthly Price</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
