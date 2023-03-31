import { z } from 'zod';
import { StudyGroupUpdateOneRequiredWithoutStudentsNestedInputObjectSchema } from './StudyGroupUpdateOneRequiredWithoutStudentsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateWithoutUserInput> = z
  .object({
    study_group: z
      .lazy(
        () => StudyGroupUpdateOneRequiredWithoutStudentsNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StudyGroupStudentUpdateWithoutUserInputObjectSchema = Schema;
