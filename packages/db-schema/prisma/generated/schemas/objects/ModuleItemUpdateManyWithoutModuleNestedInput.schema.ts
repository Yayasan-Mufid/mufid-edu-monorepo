import { z } from 'zod';
import { ModuleItemCreateWithoutModuleInputObjectSchema } from './ModuleItemCreateWithoutModuleInput.schema';
import { ModuleItemUncheckedCreateWithoutModuleInputObjectSchema } from './ModuleItemUncheckedCreateWithoutModuleInput.schema';
import { ModuleItemCreateOrConnectWithoutModuleInputObjectSchema } from './ModuleItemCreateOrConnectWithoutModuleInput.schema';
import { ModuleItemUpsertWithWhereUniqueWithoutModuleInputObjectSchema } from './ModuleItemUpsertWithWhereUniqueWithoutModuleInput.schema';
import { ModuleItemCreateManyModuleInputEnvelopeObjectSchema } from './ModuleItemCreateManyModuleInputEnvelope.schema';
import { ModuleItemWhereUniqueInputObjectSchema } from './ModuleItemWhereUniqueInput.schema';
import { ModuleItemUpdateWithWhereUniqueWithoutModuleInputObjectSchema } from './ModuleItemUpdateWithWhereUniqueWithoutModuleInput.schema';
import { ModuleItemUpdateManyWithWhereWithoutModuleInputObjectSchema } from './ModuleItemUpdateManyWithWhereWithoutModuleInput.schema';
import { ModuleItemScalarWhereInputObjectSchema } from './ModuleItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemUpdateManyWithoutModuleNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleItemCreateWithoutModuleInputObjectSchema),
        z.lazy(() => ModuleItemCreateWithoutModuleInputObjectSchema).array(),
        z.lazy(() => ModuleItemUncheckedCreateWithoutModuleInputObjectSchema),
        z
          .lazy(() => ModuleItemUncheckedCreateWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ModuleItemCreateOrConnectWithoutModuleInputObjectSchema),
        z
          .lazy(() => ModuleItemCreateOrConnectWithoutModuleInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ModuleItemUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
        ),
        z
          .lazy(
            () => ModuleItemUpsertWithWhereUniqueWithoutModuleInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ModuleItemCreateManyModuleInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema),
        z.lazy(() => ModuleItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ModuleItemUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
        ),
        z
          .lazy(
            () => ModuleItemUpdateWithWhereUniqueWithoutModuleInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ModuleItemUpdateManyWithWhereWithoutModuleInputObjectSchema,
        ),
        z
          .lazy(
            () => ModuleItemUpdateManyWithWhereWithoutModuleInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ModuleItemScalarWhereInputObjectSchema),
        z.lazy(() => ModuleItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ModuleItemUpdateManyWithoutModuleNestedInputObjectSchema = Schema;
