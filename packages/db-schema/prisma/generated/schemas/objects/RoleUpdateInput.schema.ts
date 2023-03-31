import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserRoleUpdateManyWithoutRoleNestedInputObjectSchema } from './UserRoleUpdateManyWithoutRoleNestedInput.schema';
import { RolePermissionUpdateManyWithoutRoleNestedInputObjectSchema } from './RolePermissionUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateInput> = z
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
      .lazy(() => UserRoleUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional(),
    role_permissions: z
      .lazy(() => RolePermissionUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUpdateInputObjectSchema = Schema;
