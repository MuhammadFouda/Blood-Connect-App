const MedicalForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-4">Medical Information</h1>
        <form className="space-y-4">
          <div>
            <label className="label" htmlFor="bloodType">
              Blood Type
            </label>
            <select
              id="bloodType"
              className="input"
              required
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label className="label" htmlFor="medicalHistory">
              Medical History
            </label>
            <textarea
              id="medicalHistory"
              className="input"
              rows="4"
              placeholder="Any relevant medical history"
            ></textarea>
          </div>

          <div>
            <label className="label" htmlFor="allergies">
              Allergies
            </label>
            <input
              type="text"
              id="allergies"
              className="input"
              placeholder="List any allergies"
            />
          </div>

          <button type="submit" className="button mt-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MedicalForm;
