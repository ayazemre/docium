import { describe, expect, test } from "vitest";
import { DociumNode, dociumNodeSchema } from "../../../src/models/node";
const mockDociumNodeSchemaInitializer: DociumNode = {
  id: "86767e07-0118-4d4e-9d18-0d02d9117205",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  type: "richText",
  metadata: {},
  data: "",
  nextNodeId: "86767e07-0118-4d4e-9d18-0d02d9117205",
};
describe("Node Schema Tests - Valid Data", () => {
  test("Node schema full object with correct fields.", () => {
    const parseResultWithFullObject = dociumNodeSchema.safeParse(
      mockDociumNodeSchemaInitializer
    );
    expect(parseResultWithFullObject.success).toBe(true);
  });
  test("Node schema ID only with correct data.", () => {
    const parseResultWithOnlyId = dociumNodeSchema.safeParse({
      id: mockDociumNodeSchemaInitializer.id,
    });
    expect(parseResultWithOnlyId.success).toBe(true);
  });
  test("Node schema createdAt only with correct data.", () => {
    const parseResultWithOnlyCreatedAt = dociumNodeSchema.safeParse({
      createdAt: mockDociumNodeSchemaInitializer.createdAt,
    });
    expect(parseResultWithOnlyCreatedAt.success).toBe(true);
  });
  test("Node schema updatedAt only with correct data.", () => {
    const parseResultWithOnlyUpdatedAt = dociumNodeSchema.safeParse({
      updatedAt: mockDociumNodeSchemaInitializer.updatedAt,
    });
    expect(parseResultWithOnlyUpdatedAt.success).toBe(true);
  });
  test("Node schema type only with correct data.", () => {
    const parseResultWithOnlyType = dociumNodeSchema.safeParse({
      type: "richText",
    });
    expect(parseResultWithOnlyType.success).toBe(true);
  });
  test("Node schema metadata only with correct data.", () => {
    const parseResultWithOnlyMetadata = dociumNodeSchema.safeParse({
      metadata: {},
    });
    expect(parseResultWithOnlyMetadata.success).toBe(true);
  });
  test("Node schema metadata only with correct data.", () => {
    const parseResultWithOnlyData = dociumNodeSchema.safeParse({
      data: "",
    });
    expect(parseResultWithOnlyData.success).toBe(true);
  });
  test("Node schema metadata only with correct data.", () => {
    const parseResultWithOnlyData = dociumNodeSchema.safeParse({
      nextNodeId: "86767e07-0118-4d4e-9d18-0d02d9117205",
    });
    expect(parseResultWithOnlyData.success).toBe(true);
  });
});

describe("Node Schema Tests - Invalid Data", () => {
  test("Node schema full object with incorrect ID", () => {
    const parseResultWithFullObject = dociumNodeSchema.safeParse({
      ...mockDociumNodeSchemaInitializer,
      id: "",
    });
    expect(parseResultWithFullObject.success).toBe(false);
    expect(parseResultWithFullObject.error?.issues.at(0)?.path.at(0)).toBe(
      "id"
    );
  });
});
