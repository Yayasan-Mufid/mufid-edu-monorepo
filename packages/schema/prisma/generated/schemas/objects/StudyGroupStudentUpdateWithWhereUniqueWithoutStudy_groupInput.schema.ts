import { z } from 'zod';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUpdateWithoutStudy_groupInput.schema';
import { StudyGroupStudentUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUncheckedUpdateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpdateWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => StudyGroupStudentUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupStudentUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupStudentUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
