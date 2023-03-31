import { z } from 'zod';

export const ExamSectionScalarFieldEnumSchema = z.enum([
  'id',
  'exam_id',
  'title',
  'text',
  'randomize_questions',
  'nb_of_questions',
  'seq',
  'default_point',
  'weight',
]);
