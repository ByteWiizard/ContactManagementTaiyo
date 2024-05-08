import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Here all the Components are wrapped inside the query client which will then handle the query call  

export const QueryProvider = ({ children }: { children: ReactNode }) => {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}