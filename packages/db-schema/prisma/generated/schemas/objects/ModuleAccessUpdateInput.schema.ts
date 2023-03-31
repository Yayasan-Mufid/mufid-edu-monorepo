import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModuleUpdateOneRequiredWithoutStudentsNestedInputObjectSchema } from './ModuleUpdateOneRequiredWithoutStudentsNestedInput.schema';
import { UserUpdateOneRequiredWithoutAccessible_modulesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAccessible_modulesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    granted_on: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    module: z
      .lazy(() => ModuleUpdateOneRequiredWithoutStudentsNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutAccessible_modulesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ModuleAccessUpdateInputObjectSchema = Schema;
