import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RolePermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './RolePermissionUncheckedUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUser_rolesInput> = z
  .object({
    role: z
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
          RolePermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedUpdateWithoutUser_rolesInputObjectSchema = Schema;
