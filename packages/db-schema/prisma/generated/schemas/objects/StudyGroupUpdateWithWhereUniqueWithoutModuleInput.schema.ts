import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutModuleInputObjectSchema } from './StudyGroupUpdateWithoutModuleInput.schema';
import { StudyGroupUncheckedUpdateWithoutModuleInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutModuleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateWithWhereUniqueWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupUpdateWithoutModuleInputObjectSchema),
        z.lazy(() => StudyGroupUncheckedUpdateWithoutModuleInputObjectSchema),
      ]),
    })
    .strict();

export const StudyGroupUpdateWithWhereUniqueWithoutModuleInputObjectSchema =
  Schema;
