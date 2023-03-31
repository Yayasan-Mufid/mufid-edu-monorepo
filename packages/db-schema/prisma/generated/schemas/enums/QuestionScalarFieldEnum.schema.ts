import { z } from 'zod';

export const QuestionScalarFieldEnumSchema = z.enum([
  'id',
  'program_id',
  'module_id',
  'text',
  'type',
  'grading_hint',
  'max_score',
  'randomize_choices',
  'created_by_id',
  'validated_by_id',
  'validator_note',
  'created_at',
  'validated_at',
]);
