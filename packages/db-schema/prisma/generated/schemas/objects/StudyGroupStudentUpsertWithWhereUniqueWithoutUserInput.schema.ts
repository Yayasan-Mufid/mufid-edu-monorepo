import { z } from 'zod';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentUpdateWithoutUserInputObjectSchema } from './StudyGroupStudentUpdateWithoutUserInput.schema';
import { StudyGroupStudentUncheckedUpdateWithoutUserInputObjectSchema } from './StudyGroupStudentUncheckedUpdateWithoutUserInput.schema';
import { StudyGroupStudentCreateWithoutUserInputObjectSchema } from './StudyGroupStudentCreateWithoutUserInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupStudentUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupStudentUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupStudentCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupStudentUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
