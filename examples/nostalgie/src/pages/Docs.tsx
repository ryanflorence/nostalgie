import { Helmet } from 'nostalgie/helmet';
import * as React from 'react';
import { mdxDocsComponents } from '../lib/mdxDocsComponents';
import '../styles/code.css';
import Docs from './Docs.mdx';

export default function DocsPage() {
  return (
    <>
      <Helmet>
        <title>Nostalgie - Docs</title>
      </Helmet>
      <div className="py-3 prose prose-lg max-w-none">
        <Docs components={mdxDocsComponents} />
      </div>
    </>
  );
}
