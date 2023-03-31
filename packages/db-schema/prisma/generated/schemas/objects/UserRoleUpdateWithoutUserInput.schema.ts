import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateOneRequiredWithoutUser_rolesNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutUser_rolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRoleUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .lazy(() => RoleUpdateOneRequiredWithoutUser_rolesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserRoleUpdateWithoutUserInputObjectSchema = Schema;
