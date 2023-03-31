import { z } from 'zod';
import { StudyGroupCreateWithoutModuleInputObjectSchema } from './StudyGroupCreateWithoutModuleInput.schema';
import { StudyGroupUncheckedCreateWithoutModuleInputObjectSchema } from './StudyGroupUncheckedCreateWithoutModuleInput.schema';
import { StudyGroupCreateOrConnectWithoutModuleInputObjectSchema } from './StudyGroupCreateOrConnectWithoutModuleInput.schema';
import { StudyGroupUpsertWithWhereUniqueWithoutModuleInputObjectSchema } from './StudyGroupUpsertWithWhereUniqueWithoutModuleInput.schema';
import { StudyGroupCreateManyModuleInputEnvelopeObjectSchema } from './StudyGroupCreateManyModuleInputEnvelope.schema';
import { StudyGroupWhereUniqueInputObjectSchema } from './StudyGroupWhereUniqueInput.schema';
import { StudyGroupUpdateWithWhereUniqueWithoutModuleInputObjectSchema } from './StudyGroupUpdateWithWhereUniqueWithoutModuleInput.schema';
import { StudyGroupUpdateManyWithWhereWithoutModuleInputObjectSchema } from './StudyGroupUpdateManyWithWhereWithoutModuleInput.schema';
import { StudyGroupScalarWhereInputObjectSchema } from './StudyGroupScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StudyGroupUncheckedUpdateManyWithoutModuleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StudyGroupCreateWithoutModuleInputObjectSchema),
          z.lazy(() => StudyGroupCreateWithoutModuleInputObjectSchema).array(),
          z.lazy(() => StudyGroupUncheckedCreateWithoutModuleInputObjectSchema),
          z
            .lazy(() => StudyGroupUncheckedCreateWithoutModuleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StudyGroupCreateOrConnectWithoutModuleInputObjectSchema),
          z
            .lazy(() => StudyGroupCreateOrConnectWithoutModuleInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => StudyGroupUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StudyGroupCreateManyModuleInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema),
          z.lazy(() => StudyGroupWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => StudyGroupUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                StudyGroupUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => StudyGroupUpdateManyWithWhereWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => StudyGroupUpdateManyWithWhereWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StudyGroupScalarWhereInputObjectSchema),
          z.lazy(() => StudyGroupScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StudyGroupUncheckedUpdateManyWithoutModuleNestedInputObjectSchema =
  Schema;
