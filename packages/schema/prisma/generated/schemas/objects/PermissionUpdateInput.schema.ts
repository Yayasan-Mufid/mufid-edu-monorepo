import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RolePermissionUpdateManyWithoutPermissionNestedInputObjectSchema } from './RolePermissionUpdateManyWithoutPermissionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUpdateInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    role_permissions: z
      .lazy(
        () => RolePermissionUpdateManyWithoutPermissionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionUpdateInputObjectSchema = Schema;
