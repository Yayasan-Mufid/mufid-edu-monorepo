import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutAdminsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutAdminsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpdateWithoutUserInput> = z
  .object({
    study_group: z
      .lazy(
        () => StudyGroupUpdateOneRequiredWithoutAdminsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupAdminUpdateWithoutUserInputObjectSchema = Schema;
