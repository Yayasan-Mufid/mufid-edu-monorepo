import { z } from 'zod';
import { ExamSheetWhereUniqueInputObjectSchema } from './ExamSheetWhereUniqueInput.schema';
import { ExamSheetCreateWithoutSectionsInputObjectSchema } from './ExamSheetCreateWithoutSectionsInput.schema';
import { ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamSheetUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamSheetCreateOrConnectWithoutSectionsInput> = z
  .object({
    where: z.lazy(() => ExamSheetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExamSheetCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ExamSheetUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ExamSheetCreateOrConnectWithoutSectionsInputObjectSchema = Schema;
