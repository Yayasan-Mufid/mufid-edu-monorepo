import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserRoleUpdateManyWithoutRoleNestedInputObjectSchema } from './UserRoleUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithoutRole_permissionsInput> = z
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
  })
  .strict();

export const RoleUpdateWithoutRole_permissionsInputObjectSchema = Schema;
