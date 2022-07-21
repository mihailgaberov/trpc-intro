import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.scss";

const client = new QueryClient();

const AppContent = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: client</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <AppContent />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
