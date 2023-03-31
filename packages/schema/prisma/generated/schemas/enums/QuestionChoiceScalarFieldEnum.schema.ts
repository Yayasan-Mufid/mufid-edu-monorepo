import { z } from 'zod';

export const QuestionChoiceScalarFieldEnumSchema = z.enum([
  'id',
  'question_id',
  'text',
  'answer_key',
  'seq',
]);
