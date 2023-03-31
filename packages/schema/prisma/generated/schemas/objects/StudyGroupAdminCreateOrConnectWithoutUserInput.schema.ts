import { z } from 'zod';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminCreateWithoutUserInputObjectSchema } from './StudyGroupAdminCreateWithoutUserInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupAdminCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
