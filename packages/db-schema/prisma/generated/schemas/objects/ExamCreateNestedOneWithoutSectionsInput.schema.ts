import { z } from 'zod';
import { ExamCreateWithoutSectionsInputObjectSchema } from './ExamCreateWithoutSectionsInput.schema';
import { ExamUncheckedCreateWithoutSectionsInputObjectSchema } from './ExamUncheckedCreateWithoutSectionsInput.schema';
import { ExamCreateOrConnectWithoutSectionsInputObjectSchema } from './ExamCreateOrConnectWithoutSectionsInput.schema';
import { ExamWhereUniqueInputObjectSchema } from './ExamWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExamCreateNestedOneWithoutSectionsInput> = z
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
    connect: z.lazy(() => ExamWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ExamCreateNestedOneWithoutSectionsInputObjectSchema = Schema;
