import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUpdateWithoutInvoice_accountInput.schema';
import { StudyGroupUncheckedUpdateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedUpdateWithoutInvoice_accountInput.schema';
import { StudyGroupCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateWithoutInvoice_accountInput.schema';
import { StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedCreateWithoutInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUpsertWithWhereUniqueWithoutInvoice_accountInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => StudyGroupUpdateWithoutInvoice_accountInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupUncheckedUpdateWithoutInvoice_accountInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => StudyGroupCreateWithoutInvoice_accountInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupUpsertWithWhereUniqueWithoutInvoice_accountInputObjectSchema =
  Schema;
