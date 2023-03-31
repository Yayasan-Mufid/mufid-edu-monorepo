import { z } from 'zod';
import { StudyGroupCreateWithoutExamsInputObjectSchema } from './StudyGroupCreateWithoutExamsInput.schema';
import { StudyGroupUncheckedCreateWithoutExamsInputObjectSchema } from './StudyGroupUncheckedCreateWithoutExamsInput.schema';
import { StudyGroupCreateOrConnectWithoutExamsInputObjectSchema } from './StudyGroupCreateOrConnectWithoutExamsInput.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateNestedOneWithoutExamsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StudyGroupCreateWithoutExamsInputObjectSchema),
        z.lazy(() => StudyGroupUncheckedCreateWithoutExamsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StudyGroupCreateOrConnectWithoutExamsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const StudyGroupCreateNestedOneWithoutExamsInputObjectSchema = Schema;
