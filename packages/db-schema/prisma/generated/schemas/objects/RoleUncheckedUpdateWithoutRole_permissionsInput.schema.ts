import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './UserRoleUncheckedUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutRole_permissionsInput> =
  z
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
        .lazy(
          () => UserRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const RoleUncheckedUpdateWithoutRole_permissionsInputObjectSchema =
  Schema;
