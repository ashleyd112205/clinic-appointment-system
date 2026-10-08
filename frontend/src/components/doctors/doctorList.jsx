import useDoctors from "../../hooks/useDoctors";
import "./DoctorList.css";

function DoctorList() {
  const { doctors, loading, error, reload } = useDoctors();

  if (loading) {
    return <p className="doctor-message" role="status">Loading doctors…</p>;
  }

  if (error) {
    return (
      <div className="doctor-message doctor-message--error" role="alert">
        <p>{error}</p>
        <button type="button" className="doctor-retry" onClick={reload}>
          Try again
        </button>
      </div>
    );
  }

  if (doctors.length === 0) {
    return <p className="doctor-message">No doctors are available right now. Check back later.</p>;
  }

  return (
    <section className="doctor-section" aria-label="Doctors">
      <h2>Doctors</h2>
      <ul className="doctor-list">
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default DoctorList;