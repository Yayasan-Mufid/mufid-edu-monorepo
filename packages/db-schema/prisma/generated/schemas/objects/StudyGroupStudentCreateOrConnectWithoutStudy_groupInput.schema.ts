import { z } from 'zod';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentCreateWithoutStudy_groupInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateOrConnectWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
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

export const StudyGroupStudentCreateOrConnectWithoutStudy_groupInputObjectSchema =
  Schema;
