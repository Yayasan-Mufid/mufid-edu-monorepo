import { z } from 'zod';
import { ModuleAccessCreateWithoutModuleInputObjectSchema } from './ModuleAccessCreateWithoutModuleInput.schema';
import { ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutModuleInput.schema';
import { ModuleAccessCreateOrConnectWithoutModuleInputObjectSchema } from './ModuleAccessCreateOrConnectWithoutModuleInput.schema';
import { ModuleAccessUpsertWithWhereUniqueWithoutModuleInputObjectSchema } from './ModuleAccessUpsertWithWhereUniqueWithoutModuleInput.schema';
import { ModuleAccessCreateManyModuleInputEnvelopeObjectSchema } from './ModuleAccessCreateManyModuleInputEnvelope.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessUpdateWithWhereUniqueWithoutModuleInputObjectSchema } from './ModuleAccessUpdateWithWhereUniqueWithoutModuleInput.schema';
import { ModuleAccessUpdateManyWithWhereWithoutModuleInputObjectSchema } from './ModuleAccessUpdateManyWithWhereWithoutModuleInput.schema';
import { ModuleAccessScalarWhereInputObjectSchema } from './ModuleAccessScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUncheckedUpdateManyWithoutModuleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleAccessCreateWithoutModuleInputObjectSchema),
          z
            .lazy(() => ModuleAccessCreateWithoutModuleInputObjectSchema)
            .array(),
          z.lazy(
            () => ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAccessUncheckedCreateWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ModuleAccessCreateOrConnectWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleAccessCreateOrConnectWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ModuleAccessUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAccessUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleAccessCreateManyModuleInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleAccessWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ModuleAccessUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAccessUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ModuleAccessUpdateManyWithWhereWithoutModuleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ModuleAccessUpdateManyWithWhereWithoutModuleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleAccessScalarWhereInputObjectSchema),
          z.lazy(() => ModuleAccessScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleAccessUncheckedUpdateManyWithoutModuleNestedInputObjectSchema =
  Schema;
