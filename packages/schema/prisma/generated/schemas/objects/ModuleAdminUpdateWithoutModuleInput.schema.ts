import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutManaged_modulesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutManaged_modulesNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUpdateWithoutModuleInput> = z
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
          UserUpdateOneRequiredWithoutManaged_modulesNestedInputObjectSchema,
      )
      .optional(),
    assigned_at: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleAdminUpdateWithoutModuleInputObjectSchema = Schema;
