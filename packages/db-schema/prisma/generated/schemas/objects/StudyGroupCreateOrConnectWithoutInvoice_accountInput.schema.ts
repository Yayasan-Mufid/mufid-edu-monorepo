import { z } from 'zod';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupCreateWithoutInvoice_accountInput.schema';
import { StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema } from './StudyGroupUncheckedCreateWithoutInvoice_accountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupCreateOrConnectWithoutInvoice_accountInput> =
  z
    .object({
      where: z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => StudyGroupCreateWithoutInvoice_accountInputObjectSchema),
        z.lazy(
          () =>
            StudyGroupUncheckedCreateWithoutInvoice_accountInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const StudyGroupCreateOrConnectWithoutInvoice_accountInputObjectSchema =
  Schema;
