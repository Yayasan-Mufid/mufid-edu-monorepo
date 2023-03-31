import { z } from 'zod';
import { ExamSheetUpdateWithoutSectionsInputObjectSchema } from './ExamSheetUpdateWithoutSectionsInput.schema';
import { ExamSheetUncheckedUpdateWithoutSectionsInputObjectSchema } from './ExamSheetUncheckedUpdateWithoutSectionsInput.schema';
import { ExamSheetCreateWithoutSectionsInputObjectSchema } from './ExamSheetCreateWithoutSectionsInput.schema';
import { ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamSheetUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetUpsertWithoutSectionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ExamSheetUpdateWithoutSectionsInputObjectSchema),
      z.lazy(() => ExamSheetUncheckedUpdateWithoutSectionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ExamSheetCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ExamSheetUpsertWithoutSectionsInputObjectSchema = Schema;
