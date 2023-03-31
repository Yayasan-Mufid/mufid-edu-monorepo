import { z } from 'zod';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUpdateWithoutStudy_groupInput.schema';
import { StudyGroupAdminUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUncheckedUpdateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpdateWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupAdminUpdateWithoutStudy_groupInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAdminUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
