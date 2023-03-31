import { z } from 'zod';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminUpdateWithoutUserInputObjectSchema } from './StudyGroupAdminUpdateWithoutUserInput.schema';
import { StudyGroupAdminUncheckedUpdateWithoutUserInputObjectSchema } from './StudyGroupAdminUncheckedUpdateWithoutUserInput.schema';
import { StudyGroupAdminCreateWithoutUserInputObjectSchema } from './StudyGroupAdminCreateWithoutUserInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupAdminUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupAdminUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupAdminCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
