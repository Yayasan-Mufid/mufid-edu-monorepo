import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PermissionUpdateOneRequiredWithoutRole_permissionsNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutRole_permissionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUpdateWithoutRoleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    permission: z
      .lazy(
        () =>
          PermissionUpdateOneRequiredWithoutRole_permissionsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RolePermissionUpdateWithoutRoleInputObjectSchema = Schema;
