import { z } from 'zod';
import { ExamSheetCreateWithoutSectionsInputObjectSchema } from './ExamSheetCreateWithoutSectionsInput.schema';
import { ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamSheetUncheckedCreateWithoutSectionsInput.schema';
import { ExamSheetCreateOrConnectWithoutSectionsInputObjectSchema } from './ExamSheetCreateOrConnectWithoutSectionsInput.schema';
import { ExamSheetUpsertWithoutSectionsInputObjectSchema } from './ExamSheetUpsertWithoutSectionsInput.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetUpdateWithoutSectionsInputObjectSchema } from './ExamSheetUpdateWithoutSectionsInput.schema';
import { ExamSheetUncheckedUpdateWithoutSectionsInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpdateOneRequiredWithoutSectionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ExamSheetCreateWithoutSectionsInputObjectSchema),
          z.lazy(
            () => ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ExamSheetCreateOrConnectWithoutSectionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ExamSheetUpsertWithoutSectionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ExamSheetUpdateWithoutSectionsInputObjectSchema),
          z.lazy(
            () => ExamSheetUncheckedUpdateWithoutSectionsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ExamSheetUpdateOneRequiredWithoutSectionsNestedInputObjectSchema =
  Schema;
