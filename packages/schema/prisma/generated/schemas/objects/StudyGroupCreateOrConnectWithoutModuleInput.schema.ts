import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutModuleInputObjectSchema } from './StudyGroupCreateWithoutModuleInput.schema';
import { StudyGroupUncheckedCreateWithoutModuleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutModuleInput> = z
  .object({
    where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StudyGroupCreateWithoutModuleInputObjectSchema),
      z.lazy(() => StudyGroupUncheckedCreateWithoutModuleInputObjectSchema),
    ]),
  })
  .strict();

export const StudyGroupCreateOrConnectWithoutModuleInputObjectSchema = Schema;
