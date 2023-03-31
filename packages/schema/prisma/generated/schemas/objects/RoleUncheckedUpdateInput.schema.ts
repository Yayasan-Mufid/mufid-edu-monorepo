import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './UserRoleUncheckedUpdateManyWithoutRoleNestedInput.schema';
import { RolePermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './RolePermissionUncheckedUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z
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
    user_roles: z
      .lazy(() => UserRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional(),
    role_permissions: z
      .lazy(
        () =>
          RolePermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedUpdateInputObjectSchema = Schema;
