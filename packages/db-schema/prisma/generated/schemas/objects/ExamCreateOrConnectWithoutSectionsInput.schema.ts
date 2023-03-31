import { z } from 'zod';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';
import { ExamCreateWithoutSectionsInputObjectSchema } from './ExamCreateWithoutSectionsInput.schema';
import { ExamUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateOrConnectWithoutSectionsInput> = z
  .object({
    where: z.lazy(() => ExamWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExamCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ExamUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ExamCreateOrConnectWithoutSectionsInputObjectSchema = Schema;
