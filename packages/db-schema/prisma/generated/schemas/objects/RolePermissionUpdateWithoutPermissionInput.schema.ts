import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateOneRequiredWithoutRole_permissionsNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutRole_permissionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RolePermissionUpdateWithoutPermissionInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .lazy(
        () =>
          RoleUpdateOneRequiredWithoutRole_permissionsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RolePermissionUpdateWithoutPermissionInputObjectSchema = Schema;
