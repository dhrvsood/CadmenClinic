const JsonPreview = ({ document }) => (
  <div style={{ background: 'black', color: 'white', padding: '30px' }}>
    <h1 style={{ paddingBottom: '30px' }}>
      JSON Data for "{document.displayed.title}"
    </h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </div>
)

export const defaultDocumentNodeResolver = (S) =>
  S.document().views([
    // Give all documents the JSON preview,
    // as well as the default form view
    S.view.form(),
    S.view.component(JsonPreview).title('JSON')
  ])
