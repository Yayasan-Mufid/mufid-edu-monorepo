import { z } from 'zod';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentUpdateWithoutUserInputObjectSchema } from './StudyGroupStudentUpdateWithoutUserInput.schema';
import { StudyGroupStudentUncheckedUpdateWithoutUserInputObjectSchema } from './StudyGroupStudentUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupStudentUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupStudentUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupStudentUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
