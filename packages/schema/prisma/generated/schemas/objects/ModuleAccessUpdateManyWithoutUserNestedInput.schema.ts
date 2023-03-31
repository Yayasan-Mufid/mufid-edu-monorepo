import { z } from 'zod';
import { ModuleAccessCreateWithoutUserInputObjectSchema } from './ModuleAccessCreateWithoutUserInput.schema';
import { ModuleAccessUncheckedCreateWithoutUserInputObjectSchema } from './ModuleAccessUncheckedCreateWithoutUserInput.schema';
import { ModuleAccessCreateOrConnectWithoutUserInputObjectSchema } from './ModuleAccessCreateOrConnectWithoutUserInput.schema';
import { ModuleAccessUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleAccessUpsertWithWhereUniqueWithoutUserInput.schema';
import { ModuleAccessCreateManyUserInputEnvelopeObjectSchema } from './ModuleAccessCreateManyUserInputEnvelope.schema';
import { ModuleAccessWhereUniqueInputObjectSchema } from './ModuleAccessWhereUniqueInput.schema';
import { ModuleAccessUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ModuleAccessUpdateWithWhereUniqueWithoutUserInput.schema';
import { ModuleAccessUpdateManyWithWhereWithoutUserInputObjectSchema } from './ModuleAccessUpdateManyWithWhereWithoutUserInput.schema';
import { ModuleAccessScalarWhereInputObjectSchema } from './ModuleAccessScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleAccessUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ModuleAccessCreateWithoutUserInputObjectSchema),
        z.lazy(() => ModuleAccessCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => ModuleAccessUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => ModuleAccessUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ModuleAccessCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => ModuleAccessCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ModuleAccessUpsertWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ModuleAccessUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ModuleAccessCreateManyUserInputEnvelopeObjectSchema)
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
          () => ModuleAccessUpdateWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ModuleAccessUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => ModuleAccessUpdateManyWithWhereWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => ModuleAccessUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const ModuleAccessUpdateManyWithoutUserNestedInputObjectSchema = Schema;
