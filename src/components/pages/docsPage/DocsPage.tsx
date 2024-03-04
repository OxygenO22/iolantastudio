import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import s from './DocsPage.module.scss';
import React from 'react';

export const DocsPage = () => {
  const docs = [
    {
      uri: require("../../../files/Sert.pdf"),
      fileType: "pdf",
      fileName: "Sert.pdf",
    },
    {
      uri: require("../../../files/Dogovor.doc"),
      fileType: "doc",
      fileName: "Dogovor.doc",
    },
    {
      uri: require("../../../files/Congrats.txt"),
      fileType: "txt",
      fileName: "Congrats.txt",
    },
  ];
  return (
    <div>
      <h1>DocsPage</h1>
      <div className={s.docs_wrapper}>
        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          className={s.docs}
        />
      </div>
    </div>
  );
}
