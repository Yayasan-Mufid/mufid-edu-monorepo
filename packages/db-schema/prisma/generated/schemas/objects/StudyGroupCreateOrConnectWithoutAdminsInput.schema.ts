import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutAdminsInputObjectSchema } from './StudyGroupCreateWithoutAdminsInput.schema';
import { StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutAdminsInput> = z
  .object({
    where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutAdminsInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupCreateOrConnectWithoutAdminsInputObjectSchema = Schema;
