import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProgramUpdateOneRequiredWithoutAdminsNestedInputObjectSchema } from './ProgramUpdateOneRequiredWithoutAdminsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    program: z
      .lazy(() => ProgramUpdateOneRequiredWithoutAdminsNestedInputObjectSchema)
      .optional(),
    assigned_at: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProgramAdminUpdateWithoutUserInputObjectSchema = Schema;
