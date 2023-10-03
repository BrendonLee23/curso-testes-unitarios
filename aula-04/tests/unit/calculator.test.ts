import { MathBody } from "validator";
import app from "app";
import supertest from "supertest";
import calculator from "calculator";

const api = supertest(app)

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });

  it("should sum two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sum",
      n1: 2,
      n2: 2
    };
    const result = calculator.sum(mathBody.n1, mathBody.n2);

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(4);
  });

  it("should subtract two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sub",
      n1: 2,
      n2: 2
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(0);
  });
  it("should multiply two numbers", async () => {
    const mathBody: MathBody = {
      operation: "mul",
      n1: 3,
      n2: 3
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(9);
  });

  it("should divide two numbers", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 2
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(1);
  });

  it("should return 0 when diving by zero", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: 2,
      n2: 0
    };

    const { status, body } = await api.post("/math").send(mathBody);
    expect(status).toBe(200);
    expect(body.result).toBe(0);
  });
});