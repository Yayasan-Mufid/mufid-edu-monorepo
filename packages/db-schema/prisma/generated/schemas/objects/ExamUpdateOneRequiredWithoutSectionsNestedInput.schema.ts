import { z } from 'zod';
import { ExamCreateWithoutSectionsInputObjectSchema } from './ExamCreateWithoutSectionsInput.schema';
import { ExamUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamUncheckedCreateWithoutSectionsInput.schema';
import { ExamCreateOrConnectWithoutSectionsInputObjectSchema } from './ExamCreateOrConnectWithoutSectionsInput.schema';
import { ExamUpsertWithoutSectionsInputObjectSchema } from './ExamUpsertWithoutSectionsInput.schema';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamUpdateWithoutSectionsInputObjectSchema } from './ExamUpdateWithoutSectionsInput.schema';
import { ExamUncheckedUpdateWithoutSectionsInputObjectSchema } from './ExamUncheckedUpdateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpdateOneRequiredWithoutSectionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamCreateWithoutSectionsInputObjectSchema),
          z.lazy(() => ExamUncheckedCreateWithoutSectionsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ExamCreateOrConnectWithoutSectionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ExamUpsertWithoutSectionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ExamUpdateWithoutSectionsInputObjectSchema),
          z.lazy(() => ExamUncheckedUpdateWithoutSectionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ExamUpdateOneRequiredWithoutSectionsNestedInputObjectSchema =
  Schema;
