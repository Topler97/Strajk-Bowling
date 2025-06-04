import { rest } from "msw";

export const handlers = [
  rest.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com/",
    async (req, res, ctx) => {
      const { when, people, lanes, shoes } = await req.json();

      const price = parseInt(lanes) * 100 + parseInt(people) * 120;

      const confirmation = {
        id: "12345-VERY-UNIQUE",
        price: price.toString(),
        active: true,
        when,
        lanes,
        people,
        shoes,
      };

      sessionStorage.setItem("confirmation", JSON.stringify(confirmation));

      return res(ctx.status(200), ctx.json(confirmation));
    }
  ),
];
