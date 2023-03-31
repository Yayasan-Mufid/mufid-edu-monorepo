import { z } from 'zod';
import { StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminCreateWithoutStudy_groupInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupAdminCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupAdminCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupAdminCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUncheckedCreateNestedManyWithoutStudy_groupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              StudyGroupAdminCreateOrConnectWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminCreateOrConnectWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => StudyGroupAdminCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAdminUncheckedCreateNestedManyWithoutStudy_groupInputObjectSchema =
  Schema;
