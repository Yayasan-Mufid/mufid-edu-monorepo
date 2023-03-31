import { z } from 'zod';
import { ModuleItemQuestionStatusScalarWhereInputObjectSchema } from './ModuleItemQuestionStatusScalarWhereInput.schema';
import { ModuleItemQuestionStatusUpdateManyMutationInputObjectSchema } from './ModuleItemQuestionStatusUpdateManyMutationInput.schema';
import { ModuleItemQuestionStatusUncheckedUpdateManyWithoutUser_statusInputObjectSchema } from './ModuleItemQuestionStatusUncheckedUpdateManyWithoutUser_statusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ModuleItemQuestionStatusUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ModuleItemQuestionStatusScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ModuleItemQuestionStatusUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            ModuleItemQuestionStatusUncheckedUpdateManyWithoutUser_statusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ModuleItemQuestionStatusUpdateManyWithWhereWithoutQuestionInputObjectSchema =
  Schema;
