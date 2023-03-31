import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUpdateWithoutInvoice_accountInput.schema';
import { StudyGroupUncheckedUpdateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpdateWithWhereUniqueWithoutInvoice_accountInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => StudyGroupUpdateWithoutInvoice_accountInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupUncheckedUpdateWithoutInvoice_accountInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupUpdateWithWhereUniqueWithoutInvoice_accountInputObjectSchema =
  Schema;
