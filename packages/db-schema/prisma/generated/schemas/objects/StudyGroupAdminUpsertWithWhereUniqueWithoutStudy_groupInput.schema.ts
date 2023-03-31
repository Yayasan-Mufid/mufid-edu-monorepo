import { z } from 'zod';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUpdateWithoutStudy_groupInput.schema';
import { StudyGroupAdminUncheckedUpdateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUncheckedUpdateWithoutStudy_groupInput.schema';
import { StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminCreateWithoutStudy_groupInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpsertWithWhereUniqueWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupAdminUpdateWithoutStudy_groupInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAdminUncheckedUpdateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema =
  Schema;
