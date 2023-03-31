import { z } from 'zod';
import { ModuleItemUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema } from './ModuleItemUpdateOneRequiredWithoutUser_statusNestedInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemStatusUpdateWithoutUserInput> = z
  .object({
    module_item: z
      .lazy(
        () =>
          ModuleItemUpdateOneRequiredWithoutUser_statusNestedInputObjectSchema,
      )
      .optional(),
    status: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updated_at: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemStatusUpdateWithoutUserInputObjectSchema = Schema;
