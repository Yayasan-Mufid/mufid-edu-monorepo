import { z } from 'zod';
import { ModuleAdminCreateWithoutUserInputObjectSchema } from './ModuleAdminCreateWithoutUserInput.schema';
import { ModuleAdminUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutUserInput.schema';
import { ModuleAdminCreateOrConnectWithoutUserInputObjectSchema } from './ModuleAdminCreateOrConnectWithoutUserInput.schema';
import { ModuleAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleAdminUpsertWithWhereUniqueWithoutUserInput.schema';
import { ModuleAdminCreateManyUserInputEnvelopeObjectSchema } from './ModuleAdminCreateManyUserInputEnvelope.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleAdminUpdateWithWhereUniqueWithoutUserInput.schema';
import { ModuleAdminUpdateManyWithWhereWithoutUserInputObjectSchema } from './ModuleAdminUpdateManyWithWhereWithoutUserInput.schema';
import { ModuleAdminScalarWhereInputObjectSchema } from './ModuleAdminScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleAdminCreateWithoutUserInputObjectSchema),
          z.lazy(() => ModuleAdminCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ModuleAdminUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ModuleAdminUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ModuleAdminCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ModuleAdminCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ModuleAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAdminUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleAdminCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAdminWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ModuleAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAdminUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ModuleAdminUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAdminUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleAdminScalarWhereInputObjectSchema),
          z.lazy(() => ModuleAdminScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleAdminUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
