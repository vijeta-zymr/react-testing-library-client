import Button from "react-bootstrap/Button";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails();

  // disable order button if there aren't any scoops in order
  const orderDisabled = totals.scoops === 0;

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <div style={{ float: "left" }}>
          <h1>Design Your Ice-cream!</h1>
        </div>
        <div style={{ float: "right" }}>
          <h2>
            Grand total: {formatCurrency(totals.scoops + totals.toppings)}
          </h2>
          <Button
            disabled={orderDisabled}
            onClick={() => setOrderPhase("review")}
          >
            Order Ice-cream!
          </Button>
        </div>
      </div>
      <div style={{ clear: "both" }}>
        <Options optionType="scoops" />
        <Options optionType="toppings" />
      </div>
    </div>
  );
}
