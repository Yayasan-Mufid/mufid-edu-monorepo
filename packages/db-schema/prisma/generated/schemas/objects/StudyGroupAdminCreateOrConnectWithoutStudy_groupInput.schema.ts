import { z } from 'zod';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminCreateWithoutStudy_groupInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutStudy_groupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateOrConnectWithoutStudy_groupInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminCreateOrConnectWithoutStudy_groupInputObjectSchema =
  Schema;
