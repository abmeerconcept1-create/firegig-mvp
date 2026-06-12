const jobs = [
  { id: 1, title: "Follow Instagram Page", reward: 200 },
  { id: 2, title: "Write Product Review", reward: 500 },
  { id: 3, title: "Watch Short Video", reward: 150 },
  { id: 4, title: "Join Telegram Group", reward: 300 }
];

export default function Jobs() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🔥 Available Jobs</h1>

      {jobs.map(job => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
            borderRadius: 8
          }}
        >
          <h3>{job.title}</h3>
          <p>Reward: ₦{job.reward}</p>
          <button>Accept Job</button>
        </div>
      ))}
    </main>
  );
   }
