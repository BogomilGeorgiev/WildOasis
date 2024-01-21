import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout as logoutApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"

function useLogout() {

    const navigate = useNavigate();
    const queryClient = useQueryClient();


    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,

        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/dashboard', { replace: true })

        }
    })

    return { logout, isLoading }
}

// replace: true erases the place we were earlier

export default useLogout
