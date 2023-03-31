import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutExamsInputObjectSchema } from './StudyGroupCreateWithoutExamsInput.schema';
import { StudyGroupUncheckedCreateWithoutExamsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutExamsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutExamsInput> = z
  .object({
    where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutExamsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutExamsInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupCreateOrConnectWithoutExamsInputObjectSchema = Schema;
