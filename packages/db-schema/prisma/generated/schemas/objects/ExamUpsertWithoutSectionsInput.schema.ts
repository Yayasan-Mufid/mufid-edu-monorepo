import { z } from 'zod';
import { ExamUpdateWithoutSectionsInputObjectSchema } from './ExamUpdateWithoutSectionsInput.schema';
import { ExamUncheckedUpdateWithoutSectionsInputObjectSchema } from './ExamUncheckedUpdateWithoutSectionsInput.schema';
import { ExamCreateWithoutSectionsInputObjectSchema } from './ExamCreateWithoutSectionsInput.schema';
import { ExamUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamUpsertWithoutSectionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ExamUpdateWithoutSectionsInputObjectSchema),
      z.lazy(() => ExamUncheckedUpdateWithoutSectionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ExamCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ExamUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ExamUpsertWithoutSectionsInputObjectSchema = Schema;
