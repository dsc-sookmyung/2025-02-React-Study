import Card from "./Card";

function PostCard({ title, children }) {
  return (
    <Card title={title}>
      <p style={{ margin: 0, lineHeight: 1.6 }}>{children}</p>
    </Card>
  );
}
export default PostCard;
