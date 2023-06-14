/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen } from "../../../test-utils/testing-library-utils";
// import { server } from "../../../mocks/server";
// import { rest } from "msw";
import axios from "axios";
import OrderConfirmation from "../OrderConfirmation";
import { waitFor, cleanup } from "@testing-library/react";

describe("OrderConfirmation", () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  afterAll(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("success response from server for submitting order", async () => {
    const postOrderSpyOn = jest
      .spyOn(axios, "post")
      .mockImplementation(() =>
        Promise.resolve({ data: { orderNumber: 123455676 } })
      );

    render(<OrderConfirmation />);

    await waitFor(() => {
      expect(postOrderSpyOn).toHaveBeenCalled();
      const orderText = screen.getByTestId("order-details");

      expect(orderText).toBeVisible();
      expect(orderText).toHaveTextContent("123455676");
    });
  });

  test("error response from server for submitting order", async () => {
    // override default msw response for options endpoint with error response
    // server.resetHandlers(
    //   rest.post("http://localhost:3030/order", (req, res, ctx) =>
    //     res(ctx.status(500))
    //   )
    // );

    jest.spyOn(axios, "post").mockImplementation(() =>
      Promise.resolve({
        status: 500,
      })
    );

    render(<OrderConfirmation />);

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent(
      "An unexpected error occurred. Please try again later."
    );
  });
});
