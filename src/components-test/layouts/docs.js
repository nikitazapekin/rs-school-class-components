import Link from 'next/link';

const DocsLayout = ({ children }) => (
  <div className="docs-container">
    <div className="sidebar">
      <h3>Docs</h3>

      {[...Array(50).keys()].map(i => (
        <div key={i}>
          <Link href="/docs/page-1">
            Page 1
          </Link>
          <Link href="/docs/page-2">
          Page 2
          </Link>
          <Link href="/docs/page-3">
            Page 3
          </Link>
        </div>
      ))}
    </div>

    <div className="main">{children}</div>

    <style jsx>{`
      .docs-container {
        display: flex;
      }
      .sidebar {
        width: 200px;
        padding: 20px;
        background: #fafafa;
        overflow-y: auto;
        flex: 0 0 170px;
      }
      .main {
        padding: 20px;
        flex: 0 1 auto;
      }
      a {
        display: block;
        font-size: 16px;
        margin-bottom: 5px;
      }
    `}</style>
  </div>
);

export default DocsLayout;
