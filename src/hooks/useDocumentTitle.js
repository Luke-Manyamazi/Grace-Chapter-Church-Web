import { useEffect } from 'react';

const BASE_TITLE = 'Grace Chapter Church';

export default function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} — ${BASE_TITLE}` : `${BASE_TITLE} — Revealing Christ to the World`;
    return () => {
      document.title = `${BASE_TITLE} — Revealing Christ to the World`;
    };
  }, [pageTitle]);
}
