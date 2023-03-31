import { z } from 'zod';
import { ModuleCreateWithoutProgramInputObjectSchema } from './ModuleCreateWithoutProgramInput.schema';
import { ModuleUncheckedCreateWithoutProgramInputObjectSchema } from './ModuleUncheckedCreateWithoutProgramInput.schema';
import { ModuleCreateOrConnectWithoutProgramInputObjectSchema } from './ModuleCreateOrConnectWithoutProgramInput.schema';
import { ModuleUpsertWithWhereUniqueWithoutProgramInputObjectSchema } from './ModuleUpsertWithWhereUniqueWithoutProgramInput.schema';
import { ModuleCreateManyProgramInputEnvelopeObjectSchema } from './ModuleCreateManyProgramInputEnvelope.schema';
import { ModuleWhereUniqueInputObjectSchema } from './ModuleWhereUniqueInput.schema';
import { ModuleUpdateWithWhereUniqueWithoutProgramInputObjectSchema } from './ModuleUpdateWithWhereUniqueWithoutProgramInput.schema';
import { ModuleUpdateManyWithWhereWithoutProgramInputObjectSchema } from './ModuleUpdateManyWithWhereWithoutProgramInput.schema';
import { ModuleScalarWhereInputObjectSchema } from './ModuleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleUncheckedUpdateManyWithoutProgramNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ModuleCreateWithoutProgramInputObjectSchema),
          z.lazy(() => ModuleCreateWithoutProgramInputObjectSchema).array(),
          z.lazy(() => ModuleUncheckedCreateWithoutProgramInputObjectSchema),
          z
            .lazy(() => ModuleUncheckedCreateWithoutProgramInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ModuleCreateOrConnectWithoutProgramInputObjectSchema),
          z
            .lazy(() => ModuleCreateOrConnectWithoutProgramInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ModuleUpsertWithWhereUniqueWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleUpsertWithWhereUniqueWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ModuleCreateManyProgramInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ModuleWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ModuleWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ModuleWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ModuleWhereUniqueInputObjectSchema),
          z.lazy(() => ModuleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ModuleUpdateWithWhereUniqueWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleUpdateWithWhereUniqueWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ModuleUpdateManyWithWhereWithoutProgramInputObjectSchema,
          ),
          z
            .lazy(
              () => ModuleUpdateManyWithWhereWithoutProgramInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ModuleScalarWhereInputObjectSchema),
          z.lazy(() => ModuleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ModuleUncheckedUpdateManyWithoutProgramNestedInputObjectSchema =
  Schema;
