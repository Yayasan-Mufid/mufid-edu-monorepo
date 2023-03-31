import { z } from 'zod';
import { StudyGroupAdminCreateWithoutUserInputObjectSchema } from './StudyGroupAdminCreateWithoutUserInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutUserInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutUserInput.schema';
import { StudyGroupAdminCreateOrConnectWithoutUserInputObjectSchema } from './StudyGroupAdminCreateOrConnectWithoutUserInput.schema';
import { StudyGroupAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './StudyGroupAdminUpsertWithWhereUniqueWithoutUserInput.schema';
import { StudyGroupAdminCreateManyUserInputEnvelopeObjectSchema } from './StudyGroupAdminCreateManyUserInputEnvelope.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './StudyGroupAdminUpdateWithWhereUniqueWithoutUserInput.schema';
import { StudyGroupAdminUpdateManyWithWhereWithoutUserInputObjectSchema } from './StudyGroupAdminUpdateManyWithWhereWithoutUserInput.schema';
import { StudyGroupAdminScalarWhereInputObjectSchema } from './StudyGroupAdminScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUncheckedUpdateManyWithoutUserNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupAdminCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              StudyGroupAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupAdminUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema),
          z.lazy(() => StudyGroupAdminScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
