const fTreeCss = { backgroundColor: "#fefefe", minHeight: "100vh" };

function FTreeViewer(props) {
  return (
    <div style={fTreeCss}>
      <h3>View Tree</h3>
      <pre>
        <code> {JSON.stringify(props.treeValue, null, 2)}</code>
      </pre>
    </div>
  );
}

export default FTreeViewer;
