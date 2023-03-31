import { z } from 'zod';
import { StudyGroupExamWhereUniqueInputObjectSchema } from './StudyGroupExamWhereUniqueInput.schema';
import { StudyGroupExamCreateWithoutGroupInputObjectSchema } from './StudyGroupExamCreateWithoutGroupInput.schema';
import { StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema } from './StudyGroupExamUncheckedCreateWithoutGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupExamCreateOrConnectWithoutGroupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupExamWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupExamCreateWithoutGroupInputObjectSchema),
        z.lazy(
          () => StudyGroupExamUncheckedCreateWithoutGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupExamCreateOrConnectWithoutGroupInputObjectSchema =
  Schema;
