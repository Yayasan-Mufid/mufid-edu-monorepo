import { z } from 'zod';
import { StudyGroupCreateWithoutAdminsInputObjectSchema } from './StudyGroupCreateWithoutAdminsInput.schema';
import { StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutAdminsInput.schema';
import { StudyGroupCreateOrConnectWithoutAdminsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutAdminsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateNestedOneWithoutAdminsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StudyGroupCreateWithoutAdminsInputObjectSchema),
        z.lazy(() => StudyGroupUncheckedCreateWithoutAdminsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StudyGroupCreateOrConnectWithoutAdminsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupCreateNestedOneWithoutAdminsInputObjectSchema = Schema;
