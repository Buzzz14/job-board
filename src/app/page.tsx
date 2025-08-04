import AddJobForm from "../components/AddJobForm";
import JobList from "../components/JobList";

export default function HomePage() {
  return (
    <main className="p-6 space-y-8">
      <AddJobForm />
      <JobList />
    </main>
  );
}
