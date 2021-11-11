import Edit from '../../compoments/Pages/Edit';
import Sidebar from '../../compoments/Sidebar';

export function EditDeveloper(): JSX.Element {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="section">
        <Edit />
      </div>
    </div>
  );
}
