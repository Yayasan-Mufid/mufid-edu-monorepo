import { z } from 'zod';
import { ModuleItemAttachmentWhereInputObjectSchema } from './objects/ModuleItemAttachmentWhereInput.schema';

export const ModuleItemAttachmentDeleteManySchema = z.object({
  where: ModuleItemAttachmentWhereInputObjectSchema.optional(),
});
