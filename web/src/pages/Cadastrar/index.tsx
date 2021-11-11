import Create from '../../compoments/Pages/Create';
import Sidebar from '../../compoments/Sidebar';

export function CreateDeveloper(): JSX.Element {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="section">
        <Create />
      </div>
    </div>
  );
}
