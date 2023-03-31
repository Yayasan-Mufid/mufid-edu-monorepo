import { z } from 'zod';
import { StudyGroupScalarWhereInputObjectSchema } from './StudyGroupScalarWhereInput.schema';
import { StudyGroupUpdateManyMutationInputObjectSchema } from './StudyGroupUpdateManyMutationInput.schema';
import { StudyGroupUncheckedUpdateManyWithoutStudy_groupsInputObjectSchema } from './StudyGroupUncheckedUpdateManyWithoutStudy_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateManyWithWhereWithoutModuleInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupUncheckedUpdateManyWithoutStudy_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupUpdateManyWithWhereWithoutModuleInputObjectSchema =
  Schema;
