import { z } from "@zod/mini";

export const entityModel = z.strictObject({
	id: z.uuid(),
	createdAt: z.iso.datetime(new Date().toISOString()),
	updatedAt: z.iso.datetime(new Date().toISOString()),
});

export type Entity<T> = z.infer<typeof entityModel> & T;

z.globalRegistry.add(entityModel, {
	id: "entityModel",
	title: "Entity Model",
	description:
		"Base schema is used for all other schemas. Schemas that define entities should extend this schema because any entity should be identifiable with 'id' field, contain information about when it is created and when it was last updated.",
	examples: [
		{
			id: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
			createdAt: "2023-01-01T00:00:00",
			updatedAt: "2023-01-01T00:00:00",
		},
	],
});
