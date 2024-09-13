import React, { Suspense } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import { ReduxProvider } from "./ReduxProvider";
import AuthProvider from "./AuthProvider";

// import other providers as needed

const MainProvider = ({ children }: { children: any }) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <AuthProvider>
          {/* wrap other providers around children */}
          <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
        </AuthProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};

export default MainProvider;
