import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RolePermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema } from './RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUncheckedUpdateInput> = z
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
        () =>
          RolePermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionUncheckedUpdateInputObjectSchema = Schema;
