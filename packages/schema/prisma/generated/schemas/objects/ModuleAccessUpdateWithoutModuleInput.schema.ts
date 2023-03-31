import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutAccessible_modulesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAccessible_modulesNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpdateWithoutModuleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(
        () =>
          UserUpdateOneRequiredWithoutAccessible_modulesNestedInputObjectSchema,
      )
      .optional(),
    granted_on: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleAccessUpdateWithoutModuleInputObjectSchema = Schema;
