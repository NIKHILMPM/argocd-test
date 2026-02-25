export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-800">

      <div className="text-center space-y-6 p-10 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">

        <h1 className="text-5xl font-bold text-white tracking-tight">
          Argo CD Test App 🚀
        </h1>

        <p className="text-zinc-300 text-lg">
          Successfully deployed using GitOps with Argo CD
        </p>

        <div className="inline-block mt-4 px-6 py-2 text-sm font-medium text-black bg-white rounded-full shadow hover:scale-105 transition">
          Deployment Active
        </div>

      </div>

    </main>
  );
}