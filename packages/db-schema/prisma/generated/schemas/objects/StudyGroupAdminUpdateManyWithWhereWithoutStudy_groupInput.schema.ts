import { z } from 'zod';
import { StudyGroupAdminScalarWhereInputObjectSchema } from './StudyGroupAdminScalarWhereInput.schema';
import { StudyGroupAdminUpdateManyMutationInputObjectSchema } from './StudyGroupAdminUpdateManyMutationInput.schema';
import { StudyGroupAdminUncheckedUpdateManyWithoutAdminsInputObjectSchema } from './StudyGroupAdminUncheckedUpdateManyWithoutAdminsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpdateManyWithWhereWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupAdminUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAdminUncheckedUpdateManyWithoutAdminsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminUpdateManyWithWhereWithoutStudy_groupInputObjectSchema =
  Schema;
