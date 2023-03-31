import { z } from 'zod';
import { StudyGroupAdminCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminCreateWithoutStudy_groupInput.schema';
import { StudyGroupAdminUncheckedCreateWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUncheckedCreateWithoutStudy_groupInput.schema';
import { StudyGroupAdminCreateOrConnectWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminCreateOrConnectWithoutStudy_groupInput.schema';
import { StudyGroupAdminUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUpsertWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupAdminCreateManyStudy_groupInputEnvelopeObjectSchema } from './StudyGroupAdminCreateManyStudy_groupInputEnvelope.schema';
import { StudyGroupAdminWhereUniqueInputObjectSchema } from './StudyGroupAdminWhereUniqueInput.schema';
import { StudyGroupAdminUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUpdateWithWhereUniqueWithoutStudy_groupInput.schema';
import { StudyGroupAdminUpdateManyWithWhereWithoutStudy_groupInputObjectSchema } from './StudyGroupAdminUpdateManyWithWhereWithoutStudy_groupInput.schema';
import { StudyGroupAdminScalarWhereInputObjectSchema } from './StudyGroupAdminScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupAdminUncheckedUpdateManyWithoutStudy_groupNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              StudyGroupAdminUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminUpsertWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => StudyGroupAdminCreateManyStudy_groupInputEnvelopeObjectSchema,
        )
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
              StudyGroupAdminUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminUpdateWithWhereUniqueWithoutStudy_groupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              StudyGroupAdminUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupAdminUpdateManyWithWhereWithoutStudy_groupInputObjectSchema,
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

export const StudyGroupAdminUncheckedUpdateManyWithoutStudy_groupNestedInputObjectSchema =
  Schema;
