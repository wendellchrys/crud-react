import Card from '../../compoments/Card';
import Sidebar from '../../compoments/Sidebar';

export function Home(): JSX.Element {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="section">
        <Card />
      </div>
    </div>
  );
}
