import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutModuleInputObjectSchema } from './StudyGroupUpdateWithoutModuleInput.schema';
import { StudyGroupUncheckedUpdateWithoutModuleInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutModuleInput.schema';
import { StudyGroupCreateWithoutModuleInputObjectSchema } from './StudyGroupCreateWithoutModuleInput.schema';
import { StudyGroupUncheckedCreateWithoutModuleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => StudyGroupUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupCreateWithoutModuleInputObjectSchema),
        z.lazy(() => StudyGroupUncheckedCreateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const StudyGroupUpsertWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
