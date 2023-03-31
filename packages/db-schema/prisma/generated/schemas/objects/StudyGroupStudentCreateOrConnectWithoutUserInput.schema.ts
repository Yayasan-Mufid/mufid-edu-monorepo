import { z } from 'zod';
import { StudyGroupStudentWhereUniqueInputObjectSchema } from './StudyGroupStudentWhereUniqueInput.schema';
import { StudyGroupStudentCreateWithoutUserInputObjectSchema } from './StudyGroupStudentCreateWithoutUserInput.schema';
import { StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupStudentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupStudentCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupStudentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupStudentCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupStudentUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupStudentCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
