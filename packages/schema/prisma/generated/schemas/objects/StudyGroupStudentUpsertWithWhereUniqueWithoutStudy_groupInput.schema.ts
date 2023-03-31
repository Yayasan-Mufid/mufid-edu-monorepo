import { z } from 'zod';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUpdateWithoutStudy_groupInput.schema';
import { StudyGroupStudentUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUncheckedUpdateWithoutStudy_groupInput.schema';
import { StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentCreateWithoutStudy_groupInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpsertWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => StudyGroupStudentUpdateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupStudentUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema,
        ),
        z.lazy(
          () =>
            StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupStudentUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
