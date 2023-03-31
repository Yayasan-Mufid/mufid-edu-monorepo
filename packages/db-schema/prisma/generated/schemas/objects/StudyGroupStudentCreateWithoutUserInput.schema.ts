import { z } from 'zod';
import { StudyGroupCreateNestedOneWithoutStudentsInputObjectSchema } from './StudyGroupCreateNestedOneWithoutStudentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateWithoutUserInput> = z
  .object({
    study_group: z.lazy(
      () => StudyGroupCreateNestedOneWithoutStudentsInputObjectSchema,
    ),
  })
  .strict();

export const StudyGroupStudentCreateWithoutUserInputObjectSchema = Schema;
