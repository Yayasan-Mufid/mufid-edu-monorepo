import { z } from 'zod';
import { StudyGroupAdminCreateWithoutUserInputObjectSchema } from './StudyGroupAdminCreateWithoutUserInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutUserInput.schema';
import { StudyGroupAdminCreateOrConnectWithoutUserInputObjectSchema } from './StudyGroupAdminCreateOrConnectWithoutUserInput.schema';
import { StudyGroupAdminCreateManyUserInputEnvelopeObjectSchema } from './StudyGroupAdminCreateManyUserInputEnvelope.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupAdminCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => StudyGroupAdminCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => StudyGroupAdminCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupAdminCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupAdminCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAdminUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
