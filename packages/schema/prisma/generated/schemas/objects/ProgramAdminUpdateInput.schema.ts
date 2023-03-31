import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutManaged_programsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutManaged_programsNestedInput.schema';
import { ProgramUpdateOneRequiredWithoutAdminsNestedInputObjectSchema } from './ProgramUpdateOneRequiredWithoutAdminsNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramAdminUpdateInput> = z
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
          UserUpdateOneRequiredWithoutManaged_programsNestedInputObjectSchema,
      )
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

export const ProgramAdminUpdateInputObjectSchema = Schema;
