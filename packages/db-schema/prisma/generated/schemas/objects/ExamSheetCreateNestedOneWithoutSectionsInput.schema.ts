import { z } from 'zod';
import { ExamSheetCreateWithoutSectionsInputObjectSchema } from './ExamSheetCreateWithoutSectionsInput.schema';
import { ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamSheetUncheckedCreateWithoutSectionsInput.schema';
import { ExamSheetCreateOrConnectWithoutSectionsInputObjectSchema } from './ExamSheetCreateOrConnectWithoutSectionsInput.schema';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateNestedOneWithoutSectionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ExamSheetCreateWithoutSectionsInputObjectSchema),
        z.lazy(() => ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ExamSheetCreateOrConnectWithoutSectionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ExamSheetCreateNestedOneWithoutSectionsInputObjectSchema = Schema;
