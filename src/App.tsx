import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { TaskInput } from "./components/Taskinput";
import { TaskCard } from "./components/TaskCard";
import { type TaskCardProps } from "./libs/types";

function App() {
  const Taskcards: TaskCardProps[] = [
    {id: 1, title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false},
    {id: 2, title: "Write code", description: "Finish project for class", isDone: false},
    {id: 3, title: "Deploy app", description: "Push project to GitHub Pages", isDone: false},
  ];
  
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Krittaphat" type="admin" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <div className="col-12 m-2 p-0">
        {/* Card รายการ */}
          <TaskInput />
          <TaskCard {...Taskcards[0]} />
          <TaskCard {...Taskcards [1]} />
          <TaskCard {...Taskcards [2]} />
            </div>
          </main>
        </div>
      </div>
        {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="Krittaphat Suphannakul" studentId="670610671"></Footer>
    </div>
  );
}

export default App;
