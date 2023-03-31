import { z } from 'zod';
import { StudyGroupAdminScalarWhereInputObjectSchema } from './StudyGroupAdminScalarWhereInput.schema';
import { StudyGroupAdminUpdateManyMutationInputObjectSchema } from './StudyGroupAdminUpdateManyMutationInput.schema';
import { StudyGroupAdminUncheckedUpdateManyWithoutManaged_groupsInputObjectSchema } from './StudyGroupAdminUncheckedUpdateManyWithoutManaged_groupsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupAdminUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAdminUncheckedUpdateManyWithoutManaged_groupsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
