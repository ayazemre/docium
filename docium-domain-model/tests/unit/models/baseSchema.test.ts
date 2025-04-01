import { describe, expect, it, test } from "vitest";
import { baseSchema } from "../../../src/models/base";
import z from "zod";

describe("Base Schema Tests - Valid Data", () => {
  const mockBaseSchemaInitializer: z.infer<typeof baseSchema> = {
    id: "86767e07-0118-4d4e-9d18-0d02d9117205",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  test("Base schema full object with correct fields.", () => {
    const parseResultWithFullObject = baseSchema.safeParse(
      mockBaseSchemaInitializer
    );
    expect(parseResultWithFullObject.success).toBe(true);
  });
  test("Base schema ID only with correct data.", () => {
    const parseResultWithOnlyId = baseSchema.safeParse({
      id: mockBaseSchemaInitializer.id,
    });
    expect(parseResultWithOnlyId.success).toBe(true);
  });
  test("Base schema createdAt only with correct data.", () => {
    const parseResultWithOnlyCreatedAt = baseSchema.safeParse({
      createdAt: mockBaseSchemaInitializer.createdAt,
    });
    expect(parseResultWithOnlyCreatedAt.success).toBe(true);
  });
  test("Base schema updatedAt only with correct data.", () => {
    const parseResultWithOnlyUpdatedAt = baseSchema.safeParse({
      updatedAt: mockBaseSchemaInitializer.updatedAt,
    });
    expect(parseResultWithOnlyUpdatedAt.success).toBe(true);
  });
});

describe("Base Schema - Invalid Data", () => {
  test("Base schema with invalid ID", () => {
    const parseResultWithFullObject = baseSchema.safeParse({
      id: "21345678",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    expect(parseResultWithFullObject.success).toBe(false);
  });
  test("Base schema with invalid createdAt", () => {
    const parseResultWithFullObject = baseSchema.safeParse({
      id: "86767e07-0118-4d4e-9d18-0d02d9117205",
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toISOString(),
    });
    expect(parseResultWithFullObject.success).toBe(false);
  });
  test("Base schema with invalid updatedAt", () => {
    const parseResultWithFullObject = baseSchema.safeParse({
      id: "86767e07-0118-4d4e-9d18-0d02d9117205",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toUTCString(),
    });
    expect(parseResultWithFullObject.success).toBe(false);
  });
});
