import { z } from 'zod';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminUpdateWithoutUserInputObjectSchema } from './StudyGroupAdminUpdateWithoutUserInput.schema';
import { StudyGroupAdminUncheckedUpdateWithoutUserInputObjectSchema } from './StudyGroupAdminUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupAdminUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => StudyGroupAdminUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
