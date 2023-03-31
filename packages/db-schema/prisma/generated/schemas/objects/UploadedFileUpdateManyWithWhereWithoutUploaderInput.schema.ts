import { z } from 'zod';
import { UploadedFileScalarWhereInputObjectSchema } from './UploadedFileScalarWhereInput.schema';
import { UploadedFileUpdateManyMutationInputObjectSchema } from './UploadedFileUpdateManyMutationInput.schema';
import { UploadedFileUncheckedUpdateManyWithoutUploaded_filesInputObjectSchema } from './UploadedFileUncheckedUpdateManyWithoutUploaded_filesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadedFileUpdateManyWithWhereWithoutUploaderInput> =
  z
    .object({
      where: z.lazy(() => UploadedFileScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UploadedFileUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            UploadedFileUncheckedUpdateManyWithoutUploaded_filesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UploadedFileUpdateManyWithWhereWithoutUploaderInputObjectSchema =
  Schema;
