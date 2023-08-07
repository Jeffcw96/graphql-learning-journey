import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: 'src/operations/*.ts',
  ignoreNoDocuments: true,
  generates: {
    './src/schema.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
