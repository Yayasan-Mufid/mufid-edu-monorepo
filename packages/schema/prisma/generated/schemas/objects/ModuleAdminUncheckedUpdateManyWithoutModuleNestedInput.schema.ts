import { z } from 'zod';
import { ModuleAdminCreateWithoutModuleInputObjectSchema } from './ModuleAdminCreateWithoutModuleInput.schema';
import { ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAdminUncheckedCreateWithoutModuleInput.schema';
import { ModuleAdminCreateOrConnectWithoutModuleInputObjectSchema } from './ModuleAdminCreateOrConnectWithoutModuleInput.schema';
import { ModuleAdminUpsertWithWhereUniqueWithoutModuleInputObjectSchema } from './ModuleAdminUpsertWithWhereUniqueWithoutModuleInput.schema';
import { ModuleAdminCreateManyModuleInputEnvelopeObjectSchema } from './ModuleAdminCreateManyModuleInputEnvelope.schema';
import { ModuleAdminWhereUniqueInputObjectSchema } from './ModuleAdminWhereUniqueInput.schema';
import { ModuleAdminUpdateWithWhereUniqueWithoutModuleInputObjectSchema } from './ModuleAdminUpdateWithWhereUniqueWithoutModuleInput.schema';
import { ModuleAdminUpdateManyWithWhereWithoutModuleInputObjectSchema } from './ModuleAdminUpdateManyWithWhereWithoutModuleInput.schema';
import { ModuleAdminScalarWhereInputObjectSchema } from './ModuleAdminScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAdminUncheckedUpdateManyWithoutModuleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleAdminCreateWithoutModuleInputObjectSchema),
          z.lazy(() => ModuleAdminCreateWithoutModuleInputObjectSchema).array(),
          z.lazy(
            () => ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAdminUncheckedCreateWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ModuleAdminCreateOrConnectWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAdminCreateOrConnectWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleAdminUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAdminUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleAdminCreateManyModuleInputEnvelopeObjectSchema)
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
            () =>
              ModuleAdminUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAdminUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ModuleAdminUpdateManyWithWhereWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAdminUpdateManyWithWhereWithoutModuleInputObjectSchema,
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

export const ModuleAdminUncheckedUpdateManyWithoutModuleNestedInputObjectSchema =
  Schema;
